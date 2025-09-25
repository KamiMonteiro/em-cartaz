import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, ImageBackground, Dimensions, ActivityIndicator, ScrollView} from "react-native";
import Header from "../components/Header";
import MoviesScroll from "../components/MoviesScroll";
import Footer from "../components/Footer";
import { getPopularMovies } from "../api/api";

const {widht } = Dimensions.get("window");

export default function HomeScreen() {
    const [featuredMovie, setFeaturedMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFeaturedMovie() {
            try {
                const movies = await getPopularMovies();
                if (movies && movies.length > 0) {
                    setFeaturedMovie(movies[0]);
                }
            } catch (error) {
                console.error("Erro ao buscar filme em destaque:", error);
            } finally {
                setLoading(false);
            }
        } // <-- FECHA AQUI

        fetchFeaturedMovie();
    }, []);

    return (
        <View style={styles.container}>
            <Header title="Catálogo de Filmes 🎬" />

            <View style={styles.heroContainer}>
                {loading ? (
                    <View style={styles.loadingHero}>
                        <ActivityIndicator size="large" color="#ff2727ff" />
                        <Text style={styles.loadingText}>Carregando filme em destaque...</Text>
                    </View>
                ) : featuredMovie ? (
                    <ImageBackground
                    source={{
                        uri: `https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path|| featuredMovie.poster_path}`,
                    }}
                    style={styles.hero}
                    resizeMode="cover"
                    >
                        <View style={styles.gradientOverlay} />

                    <View style={styles.heroContent}>
                        <View styles={styles.badget}>
                            <Text style={styles.badgeText}>Em Destaque</Text>
                        </View>

                    <Text style={styles.heroTitle}>{featuredMovie.title}</Text>
                    <Text style={styles.heroSubtitle} numberOfLines={2}>
                        {featuredMovie.overview || "Descubra os melhores filmes do momento!"}
                    </Text>

                    <View style={styles.hetoInfo}>
                        <Text style={styles.ratingText}> 🌟{featuredMovie.vote_average?.toFixed(1)}</Text>
                    </View>
                    <Text style={styles.yearText}>
                        {featuredMovie.release_date ? new Date(featuredMovie.release_date).getFullYear() : " "}
                    </Text>
                    <Text style={styles.genreText}>
                        {featuredMovie.adult ? '18+' : 'Livre'} 
                    </Text>
                 </View>

            <View style={styles.bottomFade} />
            </ImageBackground>
                ) : (
                    <View style={styles.errorHero}>
                        <Text style={styles.errorText}>Não foi possível carregar o filme em destaque.</Text>
                    </View>
                )}
            </View>