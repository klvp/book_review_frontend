import getCookie from "./utility/helper";

export async function booksLoader() {
    try {
        const response = await fetch(`http://localhost:3000/api/books`);
        let data = await response.json();
        return data.data ?? [];
    } catch (error) {
        console.log("🚀 ~ booksLoader ~ error:", error)
    }
}
export async function getSingleBookLoader({ params: { bookId } }) {
    try {
        const response = await fetch("http://localhost:3000/api/books/" + bookId);
        let data = await response.json();
        return data.data ?? [];
    } catch (error) {
        console.log("🚀 ~ getSingleBookLoader ~ error:", error)
    }
}
export async function userLoader() {
    try {
        if (!getCookie("token")) {
            window.location.href = "/login"
        }
        const response = await fetch(
            "http://localhost:3000/api/user",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": getCookie("token"),
                },
                credentials: "include"
            });
        let data = await response.json();
        return data.data ?? {};
    } catch (error) {
        console.log("🚀 ~ userLoader ~ error:", error)
    }
}