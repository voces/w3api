import {
	AssignmentStatement,
	Base,
	BinaryExpression,
	BooleanLiteral,
	CallExpression,
	CallStatement,
	Chunk,
	FunctionDeclaration,
	Identifier,
	LocalStatement,
	NumericLiteral,
	parse,
	StringLiteral,
	UnaryExpression,
} from "luaparse";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const luaNodeMap: Record<string, (nodeA: any) => string> = {};

const luaNodeToString = <T extends Base<string>>(node: T): string => {
	if (node === undefined) return "undefined";

	if (luaNodeMap[node.type]) return luaNodeMap[node.type](node);

	// eslint-disable-next-line no-console
	console.log(node);
	throw new Error(
		`Unhandled node type ${node.type} (see above object to inspect the node)`,
	);
};

luaNodeMap.Chunk = (node: Chunk): string =>
	node.body.map(luaNodeToString).join("\n\n");

luaNodeMap.AssignmentStatement = (node: AssignmentStatement): string =>
	node.variables
		.map(
			(variable, index) =>
				`${luaNodeToString(variable)} = ${luaNodeToString(
					node.init[index],
				)};`,
		)
		.join("\n");

luaNodeMap.Identifier = (node: Identifier): string => node.name;

luaNodeMap.NilLiteral = (): string => "null";

luaNodeMap.FunctionDeclaration = (node: FunctionDeclaration): string =>
	(node.identifier ? `const ${luaNodeToString(node.identifier)} = ` : "") +
	`() => {${
		node.body.length
			? `\n\n${node.body
					.map((node) => `\t${luaNodeToString(node)}`)
					.join("\n")}\n\n`
			: ""
	}};`;

luaNodeMap.LocalStatement = (node: LocalStatement): string =>
	node.variables
		.map(
			(variable, index) =>
				`let ${luaNodeToString(variable)} = ${luaNodeToString(
					node.init[index],
				)};`,
		)
		.join("\n");

luaNodeMap.CallExpression = (node: CallExpression): string =>
	`${luaNodeToString(node.base)}(${
		node.arguments.length
			? ` ${node.arguments.map(luaNodeToString).join(", ")} `
			: ""
	})`;

luaNodeMap.StringLiteral = (node: StringLiteral): string => node.raw;

luaNodeMap.UnaryExpression = (node: UnaryExpression): string => {
	if (node.operator === "-") return "-" + luaNodeToString(node.argument);
	throw new Error(`Unhandled unary expression operator '${node.operator}'`);
};

luaNodeMap.NumericLiteral = (node: NumericLiteral): string => node.raw;

luaNodeMap.CallStatement = (node: CallStatement): string =>
	luaNodeToString(node.expression) + ";";

luaNodeMap.BooleanLiteral = (node: BooleanLiteral): string =>
	node.value.toString();

luaNodeMap.BinaryExpression = (node: BinaryExpression): string =>
	`${luaNodeToString(node.left)} ${node.operator} ${luaNodeToString(
		node.right,
	)}`;

/**
 * Converts Lua code to JavaScript. Does not handle all cases, just those that
 * come up in war3map.lua
 * @param lua The code to convert.
 * @returns Transpiled JavaScript code.
 */
export const luaToJavaScript = (lua: string): string =>
	luaNodeToString(parse(lua));
