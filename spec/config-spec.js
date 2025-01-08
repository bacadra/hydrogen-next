'use babel'

import Config from "../lib/config";

describe("Config", () => {
  it("should read config values", () => {
    atom.config.set("hydrogen.read", JSON.stringify("bar"));
    expect(Config.getJson("read")).toEqual("bar");
  });

  it("should return {} for broken config", () => {
    atom.config.set("hydrogen.broken", "foo");
    expect(Config.getJson("broken")).toEqual({});
  });
});
