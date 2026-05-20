export async function fetchUser(id: number): Promise<any> {
  return new Promise((resolve, reject) => {
    if (id <= 0) {
      reject(new Error("Invalid user ID"));
      return;
    } else {
      resolve({
        content: "Mark",
      });
    }
  });
}

export async function fetchContentUsers(): Promise<any[]> {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  return data.users;
}

export async function getContent(id: number): Promise<any> {
  return new Promise((resolve, reject) => {
    if (id == 1) {
      resolve({
        id: 1,
        content: "Number 1",
      });
    } else {
      reject(new Error("Id not found."));
    }
  });
}
