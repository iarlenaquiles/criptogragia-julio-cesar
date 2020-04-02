const hash = require("./hash.js");

describe("Cesar encrypt working", () => {
  test("with 3 steps", () => {
    expect(
      hash.cesarEncrypt("testando o algoritmo da criptografia de cesar", 3)
    ).toBe("whvwdqgr r dojrulwpr gd fulswrjudild gh fhvdu");
  });

  test("with 0 step, same text", () => {
    expect(hash.cesarEncrypt("iarlen", 0)).toBe("iarlen");
  });

  test("with 25 step, without loop", () => {
    expect(hash.cesarEncrypt("iarlen", 25)).toBe("hzqkdm");
  });

  test("with 27 step, with one loop", () => {
    expect(hash.cesarEncrypt("iarlen", 27)).toBe("jbsmfo");
  });

  test("with 79 step, with two loops", () => {
    expect(hash.cesarEncrypt("iarlen", 79)).toBe("jbsmfo");
  });
});

describe("Cesar decrypt working", () => {
  test("with default 3 step", () => {
    expect(
      hash.cesarDecrypt("whvwdqgr r dojrulwpr gd fulswrjudild gh fhvdu", 3)
    ).toBe("testando o algoritmo da criptografia de cesar");
  });

  test("with 0 step, same text", () => {
    expect(hash.cesarDecrypt("iarlen", 0)).toBe("iarlen");
  });

  test("with 25 step, without loop", () => {
    expect(hash.cesarDecrypt("hzqkdm", 25)).toBe("iarlen");
  });

  test("with 27 step, with one loop", () => {
    expect(hash.cesarDecrypt("jbsmfo", 27)).toBe("iarlen");
  });

  test("with 79 step, with two loops", () => {
    expect(hash.cesarDecrypt("jbsmfo", 79)).toBe("iarlen");
  });
});
