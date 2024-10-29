const request = require("@/utils/request");

export default async function getUser() {
    const { data } = await request.get("/user");
    return data;
}