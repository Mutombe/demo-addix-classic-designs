import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  Star,
  Quotes,
  CaretLeft,
  CaretRight,
  Phone,
  WhatsappLogo,
  Lightbulb,
  Briefcase,
  Ruler,
  Eye,
  Heart,
  CheckCircle,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';


/* ================================================================
   ANIMATED COUNTER
   ================================================================ */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseInt(String(target).replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {inView ? count.toLocaleString() : '0'}{suffix}
    </span>
  );
}


const NoiseOverlay = ({ opacity = 0.035 }) => (
  <div
    className="absolute inset-0 pointer-events-none z-10"
    style={{
      opacity,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '128px 128px',
    }}
  />
);


/* ================================================================
   1. HERO — Elegant Maroon Interior Design
   ================================================================ */
function HeroSection() {
  const { business, hero } = siteData;
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = hero.backgroundImages || [];
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % images.length), 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-[#1A0A0A]">
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={images[currentSlide]?.url}
            alt={images[currentSlide]?.alt}
            className="absolute inset-0 w-full h-[130%] object-cover object-center"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
            loading="eager"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0A0A]/85 via-[#1A0A0A]/50 to-[#1A0A0A]/90 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0A0A]/80 via-transparent to-[#1A0A0A]/40 z-[1]" />
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-[3px] transition-all duration-500 ${i === currentSlide ? 'h-10 bg-[#7F1D1D]' : 'h-4 bg-white/20'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <NoiseOverlay />

      {/* Decorative elements */}
      <div className="absolute top-[18%] left-0 w-24 sm:w-36 h-[1px] bg-[#7F1D1D]/60 z-20" />
      <div className="absolute bottom-[22%] right-0 w-20 h-[1px] bg-[#7F1D1D]/30 z-20" />

      {/* Elegant diamond ornament */}
      <div className="absolute right-[8%] top-[25%] z-10 opacity-[0.04]">
        <div className="w-40 h-40 border border-white rotate-45" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-36"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-14 h-[2px] bg-[#7F1D1D] mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#B47070] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-8"
        >
          {hero.badge}
        </motion.p>

        <div className="overflow-hidden">
          {['SPACES', 'THAT', 'INSPIRE.'].map((word, i) => (
            <motion.div
              key={word}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading font-bold leading-[0.88] tracking-tight ${
                  word === 'INSPIRE.' ? 'text-[#B47070]' : 'text-white'
                }`}
                style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="text-white/40 text-sm sm:text-base lg:text-lg max-w-lg mt-8 leading-relaxed font-light"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-[#7F1D1D] text-white px-8 py-4 font-heading text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-[#991B1B] hover:shadow-xl hover:shadow-[#7F1D1D]/20"
          >
            {hero.ctaPrimary}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 font-heading text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:border-[#7F1D1D]/50 hover:bg-[#7F1D1D]/5"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>

        {/* Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex items-center gap-3 mt-10"
        >
          <div className="flex -space-x-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" className="text-[#B47070]" />)}
          </div>
          <span className="text-white/25 text-xs uppercase tracking-wider">{business.reviewCount} Reviews &middot; {hero.trustBadge}</span>
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-heading">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}


/* ================================================================
   2. MARQUEE
   ================================================================ */
function MarqueeTicker() {
  const items = ['RESIDENTIAL', 'COMMERCIAL', 'HOSPITALITY', '3D RENDERING', 'SPACE PLANNING', 'STYLING', 'BESPOKE', 'ELEGANCE'];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-[#1A0A0A] border-y border-white/5 py-5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="text-[#7F1D1D]/30 font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider">{item}</span>
            <span className="text-[#7F1D1D]/15 text-lg">&bull;</span>
          </span>
        ))}
      </div>
    </section>
  );
}


/* ================================================================
   3. ABOUT SPLIT
   ================================================================ */
function AboutSplit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { about, business } = siteData;

  return (
    <section ref={ref} className="bg-[#1A0A0A] py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="w-12 h-[2px] bg-[#7F1D1D] mb-8" />
            <p className="text-[#B47070]/50 text-xs uppercase tracking-[0.3em] font-heading mb-4">Our Story</p>
            <h2
              className="font-heading font-bold text-white leading-[0.92] mb-8"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
            >
              DESIGNED TO<br /><span className="text-[#B47070]">BE LIVED IN.</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 max-w-lg">{about.storyParagraphs[0]}</p>
            <p className="text-white/30 text-sm leading-relaxed max-w-lg">{about.storyParagraphs[1]}</p>

            <div className="w-full h-px bg-white/5 my-8" />

            <div className="flex gap-8 sm:gap-14">
              <div>
                <div className="text-[#7F1D1D] font-heading text-3xl sm:text-4xl font-bold">{business.projectsCompleted}</div>
                <div className="text-white/30 text-xs uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div>
                <div className="text-[#7F1D1D] font-heading text-3xl sm:text-4xl font-bold">{business.yearsExperience}</div>
                <div className="text-white/30 text-xs uppercase tracking-wider mt-1">Years</div>
              </div>
              <div>
                <div className="text-[#7F1D1D] font-heading text-3xl sm:text-4xl font-bold">{business.employees}</div>
                <div className="text-white/30 text-xs uppercase tracking-wider mt-1">Designers</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" alt="Interior design" className="w-full aspect-[4/5] object-cover object-center" loading="lazy" />
            </div>
            <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[45%] overflow-hidden border-4 border-[#1A0A0A] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" alt="Design detail" className="w-full aspect-square object-cover object-center" loading="lazy" />
            </div>
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#7F1D1D] text-white p-5 sm:p-6 shadow-2xl">
              <div className="text-center">
                <div className="font-heading text-2xl sm:text-3xl font-bold leading-none">{business.yearsExperience}</div>
                <div className="text-[10px] uppercase tracking-wider font-semibold mt-1 text-white/80">Years of<br />Design</div>
              </div>
            </div>
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-[#7F1D1D]/30" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-[#7F1D1D]/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   4. SERVICES GRID — Image-heavy Cards
   ================================================================ */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview } = siteData;

  const imgs = [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  ];

  const iconMap = { Lightbulb, Briefcase, Ruler, Star, Eye, Heart };

  return (
    <section ref={ref} className="bg-[#140808] py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-14">
          <div className="w-12 h-[2px] bg-[#7F1D1D] mb-8" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-[#B47070]/50 text-xs uppercase tracking-[0.3em] font-heading mb-3">Our Expertise</p>
              <h2 className="font-heading font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}>
                FULL-SPECTRUM<br /><span className="text-[#B47070]">DESIGN.</span>
              </h2>
            </div>
            <Link to="/services" className="group text-white/30 text-sm uppercase tracking-wider font-heading flex items-center gap-2 hover:text-[#7F1D1D] transition-colors">
              All Services <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesPreview.map((service, i) => {
            const Icon = iconMap[service.iconName] || Star;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.08 * i }}>
                <Link to={`/services/${siteData.services?.items?.[i]?.slug || '#'}`} className="group relative block overflow-hidden aspect-[3/4]">
                  <img src={imgs[i]} alt={service.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0A] via-[#1A0A0A]/30 to-transparent" />

                  <div className="absolute top-5 right-5 z-10">
                    <span className="text-[#7F1D1D]/15 font-heading text-6xl font-bold leading-none">{String(i + 1).padStart(2, '0')}</span>
                  </div>

                  <div className="absolute top-5 left-5 z-10 w-10 h-10 bg-[#7F1D1D]/20 border border-[#7F1D1D]/30 flex items-center justify-center backdrop-blur-sm">
                    <Icon size={20} className="text-[#B47070]" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="font-heading text-white text-lg sm:text-xl font-bold uppercase tracking-wide mb-2">{service.title}</h3>
                    <p className="text-white/0 group-hover:text-white/50 text-sm leading-relaxed transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">{service.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-[#B47070] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-xs uppercase tracking-wider font-heading font-semibold">View Details</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7F1D1D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   5. FEATURED GALLERY
   ================================================================ */
function FeaturedGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { featuredProjects } = siteData;

  return (
    <section ref={ref} className="bg-[#1A0A0A] py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <div className="w-12 h-[2px] bg-[#7F1D1D] mb-8" />
            <h2 className="font-heading font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}>
              SPACES WE<br /><span className="text-[#B47070]">CREATED</span>
            </h2>
          </div>
          <Link to="/projects" className="group text-white/30 text-sm uppercase tracking-wider font-heading flex items-center gap-2 hover:text-[#7F1D1D] transition-colors">
            Portfolio <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="group relative overflow-hidden md:row-span-2">
            <img src={featuredProjects[0]?.image} alt={featuredProjects[0]?.title} className="w-full h-full min-h-[400px] object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="text-[#B47070]/60 text-xs uppercase tracking-wider font-heading">{featuredProjects[0]?.category}</span>
              <h3 className="font-heading text-white text-xl sm:text-2xl font-bold uppercase tracking-wide mt-2">{featuredProjects[0]?.title}</h3>
            </div>
          </motion.div>
          {featuredProjects.slice(1).map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }} className="group relative overflow-hidden aspect-[16/10]">
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#B47070]/60 text-xs uppercase tracking-wider font-heading">{project.category}</span>
                <h3 className="font-heading text-white text-lg font-bold uppercase tracking-wide mt-1">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   6. WHY CHOOSE US — Split with Checkmarks
   ================================================================ */
function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { whyChooseUs } = siteData;

  return (
    <section ref={ref} className="bg-[#1A0A0A] py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={whyChooseUs.image}
              alt={whyChooseUs.imageAlt}
              className="w-full aspect-[4/5] object-cover object-center"
              loading="lazy"
            />
            {/* Experience badge */}
            <div className="absolute bottom-6 left-6 bg-[#7F1D1D] text-white p-5">
              <div className="font-heading text-3xl font-bold">{whyChooseUs.experienceYears}</div>
              <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{whyChooseUs.experienceLabel}</div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#7F1D1D]/15 -z-0" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="w-12 h-[2px] bg-[#7F1D1D] mb-8" />
            <p className="text-[#B47070]/50 text-xs uppercase tracking-[0.3em] font-heading mb-4">Why Addix Classic</p>
            <h2
              className="font-heading font-bold text-white leading-[0.92] mb-10"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
            >
              {whyChooseUs.titleParts.map((part, i) =>
                part.highlight
                  ? <span key={i} className="text-[#B47070]">{part.text}</span>
                  : <span key={i}>{part.text}</span>
              )}
            </h2>

            <div className="space-y-6">
              {whyChooseUs.points.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-[#7F1D1D]/20 flex items-center justify-center mt-1 group-hover:border-[#7F1D1D]/40 transition-colors">
                    <CheckCircle size={18} weight="bold" className="text-[#B47070]" />
                  </div>
                  <div>
                    <h4 className="text-white font-heading text-base font-bold uppercase tracking-wide mb-1">
                      {point.title}
                    </h4>
                    <p className="text-white/30 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   7. PROCESS — Design Workflow Steps
   ================================================================ */
function ProcessSteps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const steps = [
    {
      num: '01',
      title: 'Discovery & Briefing',
      desc: 'We visit your space, understand your lifestyle, establish budget parameters, and create the design brief that guides every decision.',
      icon: Eye,
    },
    {
      num: '02',
      title: 'Concept & Visualisation',
      desc: 'Mood boards, material palettes, and photorealistic 3D renders. You walk through your future space before any work begins.',
      icon: Lightbulb,
    },
    {
      num: '03',
      title: 'Procurement & Build',
      desc: 'Furniture sourced, contractors coordinated, installations supervised. We manage every trade and every timeline.',
      icon: Ruler,
    },
    {
      num: '04',
      title: 'Styling & Handover',
      desc: 'Art placement, textile layering, accessory styling. The finishing touches that transform a designed space into a felt experience.',
      icon: Heart,
    },
  ];

  return (
    <section ref={ref} className="bg-[#140808] py-24 sm:py-32 lg:py-40 relative">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="w-12 h-[2px] bg-[#7F1D1D] mx-auto mb-8" />
          <p className="text-[#B47070]/50 text-xs uppercase tracking-[0.3em] font-heading mb-4">Our Process</p>
          <h2
            className="font-heading font-bold text-white leading-[0.92]"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
          >
            FROM CONCEPT<br />TO <span className="text-[#B47070]">COMPLETION</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="relative bg-[#1A0A0A] border border-white/5 p-6 sm:p-8 group hover:border-[#7F1D1D]/20 transition-colors"
              >
                <span className="text-[#7F1D1D]/10 font-heading text-7xl font-bold absolute top-2 right-4 leading-none">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#7F1D1D]/10 border border-[#7F1D1D]/20 flex items-center justify-center mb-5">
                    <Icon size={24} weight="bold" className="text-[#B47070]" />
                  </div>
                  <h3 className="font-heading text-white text-base font-bold uppercase tracking-wide mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-[#7F1D1D]/20" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   8. STATS BAND
   ================================================================ */
function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { stats } = siteData;

  return (
    <section ref={ref} className="relative bg-[#1A0A0A] overflow-hidden">
      <NoiseOverlay opacity={0.02} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7F1D1D]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7F1D1D]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center relative">
              <div className="font-heading font-bold text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                <AnimatedCounter target={String(stat.number)} suffix={stat.suffix} duration={2.5} />
              </div>
              <div className="text-white/20 text-xs sm:text-sm uppercase tracking-[0.2em] font-heading mt-3">{stat.label}</div>
              {i < stats.length - 1 && <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white/5" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   7. TESTIMONIALS — Photo Avatar Carousel
   ================================================================ */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const avatars = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face',
  ];

  const next = useCallback(() => setActive((p) => (p + 1) % homeTestimonials.length), [homeTestimonials.length]);
  const prev = useCallback(() => setActive((p) => (p - 1 + homeTestimonials.length) % homeTestimonials.length), [homeTestimonials.length]);

  useEffect(() => { const t = setInterval(next, 7000); return () => clearInterval(t); }, [next]);

  const t = homeTestimonials[active];

  return (
    <section ref={ref} className="bg-[#140808] py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center">
          <p className="text-[#B47070]/40 text-xs uppercase tracking-[0.3em] font-heading mb-4">Client Voices</p>
          <Quotes size={48} weight="fill" className="text-[#7F1D1D]/15 mx-auto mb-10" />

          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
              <div className="w-16 h-16 mx-auto mb-8 overflow-hidden border-2 border-[#7F1D1D]/30">
                <img src={avatars[active % avatars.length]} alt={t.name} className="w-full h-full object-cover object-center" />
              </div>
              <blockquote className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed font-light italic mb-8 max-w-3xl mx-auto">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-[2px] bg-[#7F1D1D] mb-2" />
                <div className="text-white font-heading text-sm uppercase tracking-wider font-bold">{t.name}</div>
                <div className="text-white/30 text-xs uppercase tracking-wider">{t.role}</div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} weight="fill" className="text-[#B47070]" />)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button onClick={prev} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-[#7F1D1D]/30 transition-colors" aria-label="Previous">
              <CaretLeft size={16} />
            </button>
            <div className="flex gap-2">
              {homeTestimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`h-[2px] transition-all duration-300 ${i === active ? 'w-8 bg-[#7F1D1D]' : 'w-3 bg-white/10'}`} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-[#7F1D1D]/30 transition-colors" aria-label="Next">
              <CaretRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   8. CTA
   ================================================================ */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-32 sm:py-40 lg:py-48 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={homeCta.backgroundImage} alt={homeCta.backgroundAlt} className="w-full h-[130%] object-cover object-center" loading="lazy" />
        <div className="absolute inset-0 bg-[#1A0A0A]/75" />
      </motion.div>
      <NoiseOverlay opacity={0.03} />
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#7F1D1D]/15 z-20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[#7F1D1D]/15 z-20" />

      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
          <h2 className="font-heading font-bold text-white leading-[0.88] mb-8" style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}>
            {homeCta.titleParts.map((part, i) =>
              part.highlight ? <span key={i} className="text-[#B47070]">{part.text}</span> : <span key={i}>{part.text}</span>
            )}
          </h2>
          <p className="text-white/40 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-10 leading-relaxed">{homeCta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#7F1D1D] text-white px-8 py-4 font-heading text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-[#991B1B] hover:shadow-xl hover:shadow-[#7F1D1D]/20">
              {homeCta.ctaPrimary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 border border-green-500/40 text-green-400 px-8 py-4 font-heading text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/60">
              <WhatsappLogo size={20} weight="fill" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   HOME
   ================================================================ */
function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeTicker />
      <AboutSplit />
      <ServicesGrid />
      <FeaturedGallery />
      <WhyChooseUs />
      <ProcessSteps />
      <StatsBand />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}

export default Home;
