"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// 블로그 포스트 데이터 (추후 CMS 또는 마크다운으로 관리 가능)
const blogPosts = [
    {
        slug: "menopause-symptoms-guide",
        title: "갱년기 증상, 이것만은 꼭 알아두세요",
        excerpt: "갱년기 증상을 조기에 인지하고 대처하는 방법을 알아봅니다. 안면 홍조, 수면 장애, 감정 변화 등 주요 증상과 관리법을 소개합니다.",
        category: "갱년기",
        date: "2024-11-20",
        readTime: "5분",
        image: "/blog/menopause.jpg",
    },
    {
        slug: "sleep-quality-improvement",
        title: "숙면을 위한 7가지 과학적 방법",
        excerpt: "수면 전문가가 추천하는 수면 질 개선 방법입니다. 수면 위생부터 이완 기법까지, 오늘 밤부터 바로 실천할 수 있는 팁을 공유합니다.",
        category: "수면",
        date: "2024-11-18",
        readTime: "7분",
        image: "/blog/sleep.jpg",
    },
    {
        slug: "stress-management-techniques",
        title: "직장인 여성을 위한 스트레스 관리법",
        excerpt: "바쁜 일상 속에서도 실천 가능한 스트레스 관리 기법을 소개합니다. 5분 명상, 호흡법, 업무 경계 설정 등 실용적인 방법들을 알아봅니다.",
        category: "스트레스",
        date: "2024-11-15",
        readTime: "6분",
        image: "/blog/stress.jpg",
    },
    {
        slug: "iron-deficiency-women",
        title: "여성의 철분 부족, 왜 중요한가요?",
        excerpt: "생리로 인한 철분 손실과 빈혈 예방법을 알아봅니다. 철분이 풍부한 음식과 효과적인 섭취 방법, 보충제 선택 가이드를 제공합니다.",
        category: "영양",
        date: "2024-11-12",
        readTime: "5분",
        image: "/blog/iron.jpg",
    },
    {
        slug: "hormone-balance-foods",
        title: "호르몬 밸런스를 위한 식단 가이드",
        excerpt: "호르몬 균형에 도움이 되는 음식과 피해야 할 음식을 소개합니다. 이소플라본, 오메가-3, 비타민 B군 등 핵심 영양소를 알아봅니다.",
        category: "호르몬",
        date: "2024-11-10",
        readTime: "8분",
        image: "/blog/hormone-foods.jpg",
    },
    {
        slug: "exercise-for-40s-women",
        title: "40대 여성을 위한 운동 루틴",
        excerpt: "40대부터 시작해야 할 운동과 피해야 할 운동을 알아봅니다. 근력 운동, 유산소 운동, 유연성 운동의 황금 비율을 소개합니다.",
        category: "운동",
        date: "2024-11-08",
        readTime: "6분",
        image: "/blog/exercise.jpg",
    },
];

const categories = ["전체", "갱년기", "수면", "스트레스", "영양", "호르몬", "운동"];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("전체");

    // 선택된 카테고리에 따라 포스트 필터링
    const filteredPosts = selectedCategory === "전체"
        ? blogPosts
        : blogPosts.filter((post) => post.category === selectedCategory);

    return (
        <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50 min-h-screen">
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
                {/* Header */}
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>📝</span>
                        <span>건강 블로그</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        여성 건강 이야기
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        전문가가 전하는 건강 정보와
                        <br />
                        <strong className="text-gray-800">실생활에 바로 적용할 수 있는 팁</strong>
                    </p>
                </header>

                {/* Categories */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === selectedCategory
                                    ? "bg-purple-600 text-white shadow-lg scale-105"
                                    : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                {selectedCategory !== "전체" && (
                    <div className="text-center mb-6">
                        <p className="text-gray-600">
                            <strong className="text-purple-600">{selectedCategory}</strong> 카테고리 {filteredPosts.length}개 글
                        </p>
                    </div>
                )}

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                            <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                                {/* Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-purple-100 to-rose-100 flex items-center justify-center">
                                    <span className="text-6xl">{getCategoryEmoji(post.category)}</span>
                                </div>

                                <CardHeader>
                                    <div className="flex items-center gap-2 text-sm text-purple-600 mb-2">
                                        <span className="font-medium">{post.category}</span>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-purple-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-3">
                                        {post.excerpt}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{formatDate(post.date)}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 text-purple-600 font-medium group-hover:gap-3 transition-all">
                                        <span>자세히 보기</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-600 text-lg">
                            해당 카테고리의 글이 아직 없습니다.
                        </p>
                    </div>
                )}

                {/* Newsletter CTA */}
                <section className="mt-16 bg-gradient-to-r from-purple-600 to-rose-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        건강 정보를 정기적으로 받아보세요
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        매주 새로운 건강 팁과 가이드를 이메일로 보내드립니다
                    </p>
                    <div className="max-w-md mx-auto flex gap-3">
                        <input
                            type="email"
                            placeholder="이메일 주소를 입력하세요"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                        />
                        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                            구독하기
                        </button>
                    </div>
                    <p className="text-sm mt-4 opacity-75">
                        * 언제든지 구독을 취소할 수 있습니다
                    </p>
                </section>
            </div>
        </div>
    );
}

function getCategoryEmoji(category: string): string {
    const emojiMap: Record<string, string> = {
        갱년기: "🌸",
        수면: "😴",
        스트레스: "🧘",
        영양: "🥗",
        호르몬: "💊",
        운동: "💪",
    };
    return emojiMap[category] || "📝";
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
}
