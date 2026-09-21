import React, { useState, useEffect, useMemo } from 'react';
import { AuthorItem } from '../types';
import { useTheme } from '../context/ThemeContext';
import {
  getStoredAuthors,
  calculateWeeklyAuthorData,
  subscribeToAuthorsUpdate
} from '../data/authorsData';

export const FeaturedAuthor: React.FC = () => {
  const { isDark, isPurple, isEmerald } = useTheme();

  // Estado sincronizado com o banco de dados / ADM
  const [authorsList, setAuthorsList] = useState<AuthorItem[]>(() => getStoredAuthors());
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date());
  const [imageError, setImageError] = useState(false);

  // Escuta atualizações feitas no CRUD do ADM em tempo real
  useEffect(() => {
    const unsubscribe = subscribeToAuthorsUpdate(() => {
      setAuthorsList(getStoredAuthors());
      setCurrentDate(new Date());
    });

    // Atualiza a cada hora para garantir precisão no relógio e virada da segunda-feira
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000 * 60);

    return () => {
      unsubscribe();
      clearInterval(timer);
    };
  }, []);

  // Lógica Semanal: calcula e seleciona o autor oficial da semana vigente
  const weeklyData = useMemo(() => {
    return calculateWeeklyAuthorData(authorsList, currentDate);
  }, [authorsList, currentDate]);

  const author = weeklyData.author;

  useEffect(() => {
    setImageError(false);
  }, [author?.id, author?.photoUrl]);

  if (!author) return null;

  const quoteText = author.featuredQuote || 'Sentia mais prazer de brincar com as palavras do que de pensar com elas';
  const quoteSource = author.quoteSource || 'Poeminha em língua de brincar';

  return (
    <div
      id="featured-author-poster"
      className="relative w-full max-w-sm sm:max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#2d2116]/80 bg-[#0d0906]"
      style={{
        backgroundColor: '#0d0906'
      }}
    >
      {/* 1. FOTO DO AUTOR DA SEMANA */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[1.15/1] overflow-hidden bg-[#18110b]">
        {!imageError && author.photoUrl ? (
          <img
            src={author.photoUrl}
            alt={author.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#d5ba82]/70 bg-gradient-to-b from-[#18110b] to-[#0d0906]">
            <span className="text-4xl mb-2">✍️</span>
            <span className="font-serif italic text-base font-bold text-[#e6cf9f]">
              {author.name}
            </span>
          </div>
        )}

        {/* Gradiente sutil inferior na transição da foto para o bloco da frase */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d0906] to-transparent pointer-events-none" />

        {/* Discreta badge minimalista da semana */}
        <div className="absolute top-3.5 right-3.5">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#d5ba82] border border-[#d5ba82]/30 shadow-md">
            Autor da Semana
          </span>
        </div>
      </div>

      {/* 2. FRASE EMBAIXO DA FOTO (Estilo idêntico ao modelo com tipografia dourada/sépiada clássica) */}
      <div className="p-6 sm:p-7 text-center flex flex-col items-center justify-center space-y-3 relative z-10 bg-[#0d0906]">
        {/* Citação Inspiradora com aspas elegantes */}
        <blockquote className="text-[#ecd39f] font-serif text-lg sm:text-xl font-bold leading-relaxed tracking-normal max-w-sm">
          <span className="text-[#c79b4b] mr-1.5 text-2xl font-serif leading-none select-none">
            ❝
          </span>
          {quoteText}
          <span className="text-[#c79b4b] ml-1.5 text-2xl font-serif leading-none select-none">
            ❞
          </span>
        </blockquote>

        {/* Nome do Autor e Obra de Origem */}
        <div className="pt-1.5 space-y-0.5">
          <h3 className="text-[#d8be8d] font-serif text-sm sm:text-base font-semibold tracking-wide">
            {author.name},
          </h3>
          {quoteSource && (
            <p className="text-[#a48858] font-serif italic text-xs sm:text-sm font-normal">
              em {quoteSource}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
