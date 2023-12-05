import { useEffect, useState } from "react";
import { Header } from "./Header";
import { fetchAllNews } from "../services/NewsService";
import { Container, Row } from "react-bootstrap";
import { NewsArticle } from "./NewsArticle";

export function AllNews(){

    const [articles,setArticles]=useState([]);

    async function fetchArticles(){
        try {
            const result=await fetchAllNews();
            setArticles(result.articles);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchArticles();
    },[]);

    return (
        <Container>
            <Header text="You can view all type of news here"></Header>
            <Row>
                {
                    articles.map((article) => {
                        return (
                            <NewsArticle article={article}></NewsArticle>
                        );
                    })
                }
            </Row>
        </Container>
        
    );
}