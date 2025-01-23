export async function booksLoader() {
    try {
        const response = await fetch(`http://localhost:3000/api/books`);
        let data = await response.json();
        console.log("🚀 ~ loader ~ data:", data);
        return data.data ?? [];
    } catch (error) {
        console.log("🚀 ~ booksLoader ~ error:", error)

    }
}
export async function getSingleBookLoader({ params: { bookId } }) {
    try {
        const response = await fetch("http://localhost:3000/api/books/" + bookId);
        let data = await response.json();
        console.log("🚀 ~ getSingleBookLoader ~ data:", data)
        return data.data ?? [];
    } catch (error) {
        console.log("🚀 ~ getSingleBookLoader ~ error:", error)
    }
}