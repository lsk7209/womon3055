import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, Moon, Brain, Pill, Activity } from "lucide-react";

export const metadata: Metadata = {
    title: "건강 가이드 | 나이스우먼",
    description: "30~55세 여성을 위한 건강 정보, 호르몬 변화, 수면, 스트레스, 영양 가이드를 제공합니다.",
    keywords: ["여성 건강", "건강 가이드", "호르몬", "수면", "스트레스", "영양"],
};

export default function GuidePage() {
    const guides = [
        {
            id: "hormone-basics",
            title: "호르몬 기초 지식",
            description: "에스트로겐, 프로게스테론 등 여성 호르몬의 역할과 연령별 변화",
            icon: Heart,
            color: "text-rose-600 bg-rose-50",
            href: "/guide/hormone-basics",
        },
        {
            id: "30s-health",
            title: "30대 여성 건강",
            description: "30대 여성의 주요 건강 변화와 예방, 관리 방법",
            icon: Activity,
            color: "text-green-600 bg-green-50",
            href: "/guide/30s-health",
        },
        {
            id: "40s-health",
            title: "40대 여성 건강",
            description: "40대 여성의 호르몬 변화와 갱년기 전기 관리",
            icon: Activity,
            color: "text-orange-600 bg-orange-50",
            href: "/guide/40s-health",
        },
        {
            id: "50s-health",
            title: "50대 여성 건강",
            description: "50대 여성의 폐경기 관리와 건강 유지 방법",
            icon: Activity,
            color: "text-purple-600 bg-purple-50",
            href: "/guide/50s-health",
        },
        {
            id: "sleep",
            title: "수면 가이드",
            description: "수면 질을 개선하는 과학적 방법과 실천 가능한 팁",
            icon: Moon,
            color: "text-blue-600 bg-blue-50",
            href: "/guide/sleep",
        },
        {
            id: "stress",
            title: "스트레스 관리",
            description: "스트레스를 효과적으로 관리하고 회복하는 방법",
            icon: Brain,
            color: "text-indigo-600 bg-indigo-50",
            href: "/guide/stress",
        },
        {
            id: "nutrition",
            title: "영양 가이드",
            description: "여성 건강에 필수적인 영양소와 올바른 섭취 방법",
            icon: Pill,
            color: "text-amber-600 bg-amber-50",
            href: "/guide/nutrition",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-rose-50 to-white min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <BookOpen className="w-5 h-5" />
                        <span>건강 정보 라이브러리</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        <span className="text-rose-600">나이스우먼</span> 건강 가이드
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        30~55세 여성의 건강한 삶을 위한
                        <br />
                        <strong className="text-gray-800">과학적 근거 기반 건강 정보</strong>를 제공합니다
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides.map((guide) => {
                        const Icon = guide.icon;
                        return (
                            <Link key={guide.id} href={guide.href}>
                                <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-rose-200 h-full">
                                    <CardHeader className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-14 h-14 rounded-xl ${guide.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                                                <Icon className="w-7 h-7" />
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl group-hover:text-rose-600 transition-colors">
                                            {guide.title}
                                        </CardTitle>
                                        <CardDescription className="text-base leading-relaxed text-gray-600">
                                            {guide.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-sm text-rose-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                            자세히 보기 →
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Why Trust Us Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            왜 나이스우먼 가이드를 신뢰할 수 있나요?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">📚</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">과학적 근거</h3>
                                <p className="text-gray-600 text-sm">
                                    WHO, NIH, 보건복지부 등 신뢰할 수 있는 기관의 연구 자료를 기반으로 작성되었습니다
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">👩‍⚕️</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">전문가 검수</h3>
                                <p className="text-gray-600 text-sm">
                                    Health Lab Research Team의 전문가들이 검토하고 승인한 정보만 제공합니다
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🔄</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">정기 업데이트</h3>
                                <p className="text-gray-600 text-sm">
                                    최신 연구 결과를 반영하여 정기적으로 내용을 업데이트합니다
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
