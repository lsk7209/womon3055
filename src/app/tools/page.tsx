import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Brain, Heart, Moon, Pill, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "자가진단 도구 | 나이스우먼",
    description: "호르몬, 수면, 스트레스, 체형, 영양소 등 나이스우먼의 모든 건강 자가진단 도구를 모았습니다.",
};

const tools = [
    {
        id: "hormone",
        title: "호르몬 밸런스 파인더",
        description: "\"요즘 감정 기복이 심해졌어요\" - 호르몬 변화 신호를 확인하세요",
        emoji: "🌸",
        icon: Heart,
        color: "text-rose-600 bg-rose-50",
        badge: "가장 인기",
        href: "/tools/hormone",
    },
    {
        id: "sleep",
        title: "수면 질 테스트",
        description: "\"밤새 뒤척이다 아침이 왔어요\" - 수면 패턴을 분석해드려요",
        emoji: "😴",
        icon: Moon,
        color: "text-blue-600 bg-blue-50",
        badge: "",
        href: "/tools/sleep",
    },
    {
        id: "stress",
        title: "스트레스·번아웃 테스트",
        description: "\"아무것도 하기 싫어요\" - 지금 당신의 마음 상태를 체크하세요",
        emoji: "💆‍♀️",
        icon: Brain,
        color: "text-purple-600 bg-purple-50",
        badge: "",
        href: "/tools/stress",
    },
    {
        id: "body-age",
        title: "체형 나이 측정기",
        description: "\"실제 나이보다 몸이 더 늙은 것 같아요\" - 체형 나이를 확인하세요",
        emoji: "⚖️",
        icon: Activity,
        color: "text-green-600 bg-green-50",
        badge: "",
        href: "/tools/body-age",
    },
    {
        id: "nutrients",
        title: "영양소 결핍 분석기",
        description: "\"피곤하고 머리카락이 많이 빠져요\" - 부족한 영양소를 찾아드려요",
        emoji: "🥗",
        icon: Pill,
        color: "text-orange-600 bg-orange-50",
        badge: "",
        href: "/tools/nutrients",
    },
];

export default function ToolsPage() {
    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
                {/* Header */}
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>🎯</span>
                        <span>건강 자가진단</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        나에게 맞는 진단 도구 찾기
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        현재 겪고 있는 증상이나 고민에 맞춰
                        <br />
                        <strong className="text-gray-800">과학적인 자가진단</strong>을 시작해보세요
                    </p>
                </header>

                {/* Tools Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tools.map((tool) => {
                        const Icon = tool.icon;
                        return (
                            <Card
                                key={tool.id}
                                className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-rose-200 relative overflow-hidden"
                            >
                                {tool.badge && (
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                                        {tool.badge}
                                    </div>
                                )}
                                <Link href={tool.href}>
                                    <CardHeader className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-16 h-16 rounded-2xl ${tool.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                                                <span className="text-3xl">{tool.emoji}</span>
                                            </div>
                                            <div className="flex-1">
                                                <CardTitle className="text-xl group-hover:text-rose-600 transition-colors">
                                                    {tool.title}
                                                </CardTitle>
                                            </div>
                                        </div>
                                        <CardDescription className="text-base leading-relaxed text-gray-600 min-h-[3rem]">
                                            {tool.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <span>⏱️</span>
                                                <span>3분 소요</span>
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span>📊</span>
                                                <span>즉시 결과</span>
                                            </span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            className="w-full group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-rose-600 group-hover:text-white transition-all font-medium"
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                지금 시작하기
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </Button>
                                    </CardContent>
                                </Link>
                            </Card>
                        );
                    })}
                </div>

                {/* CTA */}
                <section className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        결과를 어떻게 활용하나요?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-8 text-left">
                        <div className="space-y-3">
                            <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold">1</div>
                            <h3 className="font-bold text-gray-900">현재 상태 확인</h3>
                            <p className="text-gray-600 text-sm">
                                막연한 불안감 대신 데이터로 내 몸의 현재 상태를 객관적으로 파악합니다.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold">2</div>
                            <h3 className="font-bold text-gray-900">맞춤 가이드 확인</h3>
                            <p className="text-gray-600 text-sm">
                                진단 결과에 따라 나에게 꼭 필요한 영양소, 운동, 생활 습관 팁을 제공받습니다.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold">3</div>
                            <h3 className="font-bold text-gray-900">변화 기록하기</h3>
                            <p className="text-gray-600 text-sm">
                                정기적으로 테스트를 진행하며 내 몸이 어떻게 변화하는지 트래킹합니다.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
