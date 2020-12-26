import {
	getAspectRatio,
	getScale,
	getXOffset,
	getYOffset,
	wc2px,
	wcx2px,
	wcy2px,
} from "./adapter";

it("when aspect ratio is 4:3", () => {
	globalThis.innerWidth = 1600;
	globalThis.innerHeight = 1200;

	expect(getAspectRatio()).toEqual(4 / 3);
	expect(getXOffset()).toEqual(0);
	expect(getYOffset()).toEqual(0);
	expect(getScale()).toEqual(2000);

	expect(wc2px(0)).toEqual(0);

	expect(wc2px(0.3)).toEqual(600);
	expect(wc2px(0.6)).toEqual(1200);

	expect(wc2px(0.4)).toEqual(800);
	expect(wc2px(0.8)).toEqual(1600);

	// y is flipped
	expect(wcy2px(0.1)).toBeCloseTo(1200 - 1200 / 6);
	expect(wcx2px(0.1)).toBeCloseTo(1600 / 8);
});

it("when aspect ratio is 16:10", () => {
	globalThis.innerWidth = 1920;
	globalThis.innerHeight = 1200;

	expect(getAspectRatio()).toEqual(16 / 10);
	expect(getXOffset()).toBeCloseTo(160);
	expect(getYOffset()).toEqual(0);
	expect(getScale()).toEqual(2000);

	expect(wc2px(0)).toEqual(0);

	expect(wc2px(0.3)).toEqual(2000 * 0.3);
	expect(wc2px(0.6)).toEqual(1200);

	expect(wc2px(0.4)).toEqual(800);
	expect(wc2px(0.8)).toEqual(1600);

	expect(wcy2px(0.1)).toBeCloseTo(1200 - 1200 / 6);
	expect(wcx2px(0.1)).toBeCloseTo(160 + 1600 / 8);
});

it("when aspect ratio is 1:1", () => {
	globalThis.innerWidth = 1200;
	globalThis.innerHeight = 1200;

	expect(getAspectRatio()).toEqual(1);
	expect(getXOffset()).toBeCloseTo(0);
	expect(getYOffset()).toBeCloseTo(150);
	expect(getScale()).toEqual(1500);

	expect(wc2px(0)).toEqual(0);

	expect(wc2px(0.3)).toEqual(1500 * 0.3);
	expect(wc2px(0.6)).toEqual(900);

	expect(wc2px(0.4)).toEqual(600);
	expect(wc2px(0.8)).toEqual(1200);

	expect(wcy2px(0.1)).toBeCloseTo(-150 + 1200 - 900 / 6);
	expect(wcx2px(0.1)).toBeCloseTo(1200 / 8);
});
