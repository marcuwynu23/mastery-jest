import {fetchContentUsers, fetchUser, getContent} from "../src/intermediate";

// ############################## Test asynchronous code with `async/await`, `resolves`, and `rejects`  ###############################
describe("fetchUser - async/await style", () => {
  test("resolve with a user object for valid ID", async () => {
    const user = await fetchUser(1);

    expect(user).toEqual({
      content: "Mark",
    });
  });

  test("throws for an invalid ID (id <= 0)", async () => {
    await expect(fetchUser(-1)).rejects.toThrow("Invalid user ID");
  });
});

describe("fetchContentUsers - async/await style", () => {
  test("resolve with a users objects", async () => {
    const data = await fetchContentUsers();
    const users = data;

    expect(users).toBeTruthy();
    expect(Array.isArray(users)).toBe(true);
  });
});

describe("getContent - async/await style", () => {
  test("resolve getContent data", async () => {
    const content = await getContent(1);

    expect(content).toMatchObject({
      id: 1,
      content: "Number 1",
    });
  });

  test("throws error if id is equal to 0", async () => {
    expect(getContent(0)).rejects.toThrow("Id not found.");
  });
});
