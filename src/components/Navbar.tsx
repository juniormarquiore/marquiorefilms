'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary/90 backdrop-blur-md fixed w-full z-10">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative">
            <span className="font-serif text-primary text-2xl font-bold">MARQUIORE FILMES</span>
            <div className="absolute -top-3 -right-6 w-8 h-8 bg-contain bg-no-repeat opacity-80"
              style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/024/043/840/non_2x/the-creation-of-adam-michelangelo-hand-illustration-ai-generated-free-png.png')" }}>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-accent hover:text-primary transition-colors">Início</Link>
          <Link href="/sobre" className="text-accent hover:text-primary transition-colors">Sobre</Link>
          <Link href="/portfolio" className="text-accent hover:text-primary transition-colors">Portfólio</Link>
          <Link href="/servicos" className="text-accent hover:text-primary transition-colors">Serviços</Link>
          <Link href="/contato" className="text-accent hover:text-primary transition-colors">Contato</Link>
          <Link 
            href="/auth/login" 
            className="bg-primary text-secondary px-4 py-1 rounded-md hover:bg-primary/90 transition-colors ml-2 flex items-center"
          >
            <span>Área do Cliente</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-accent focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link href="/" className="text-accent hover:text-primary transition-colors">Início</Link>
            <Link href="/sobre" className="text-accent hover:text-primary transition-colors">Sobre</Link>
            <Link href="/portfolio" className="text-accent hover:text-primary transition-colors">Portfólio</Link>
            <Link href="/servicos" className="text-accent hover:text-primary transition-colors">Serviços</Link>
            <Link href="/contato" className="text-accent hover:text-primary transition-colors">Contato</Link>
            <Link 
              href="/auth/login" 
              className="bg-primary text-secondary px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-center flex items-center justify-center"
            >
              <span>Área do Cliente</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 