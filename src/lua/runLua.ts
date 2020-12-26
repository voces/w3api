import { luaToJavaScript } from "./luaToJavaScript";

/**
 * Executes Lua code as transpiled JavaScript.
 * @lua The lua code, as a string.
 */
export const runLua = (lua: string): void => {
	const code = luaToJavaScript(lua);

	try {
		eval(code);
	} catch (err) {
		console.error(err);
		throw new Error("error executing lua");
	}
};
