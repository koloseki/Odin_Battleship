import {describe,expect,it} from "vitest";
import createShip from "./shipFactory.ts";



describe("#createShip", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(createShip(6).getLength()).toBe(6);
  });
});