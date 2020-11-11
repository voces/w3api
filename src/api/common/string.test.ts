import { revFourCC } from "../../helpers/string";
import { FourCC } from "./string";

describe("FourCC", () => {
	it("0000", () => expect(FourCC("0000")).toEqual(808464432));
	it("0001", () => expect(FourCC("0001")).toEqual(808464433));
	it("0010", () => expect(FourCC("0010")).toEqual(808464688));
	it("0100", () => expect(FourCC("0100")).toEqual(808529968));
	it("1000", () => expect(FourCC("1000")).toEqual(825241648));
	it("000a", () => expect(FourCC("000a")).toEqual(808464481));
	it("000A", () => expect(FourCC("000A")).toEqual(808464449));
	it("footman", () => expect(FourCC("hfoo")).toEqual(1751543663));
});

it("revFourCC", () => expect(revFourCC(FourCC("hfoo"))).toEqual("hfoo"));
