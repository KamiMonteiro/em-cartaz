const API_KEY = "7730fba711a3fcb572843117f368d781";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`
        ) ;
        const json = await response.json();
        return json.results;
    } catch (error) {
        console.error("Error ao buscar filmes:", error);
        return [];
    }
}