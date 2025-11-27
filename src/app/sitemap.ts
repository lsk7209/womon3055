import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://nicewomen.kr";
    const currentDate = new Date();

    return [
        // 메인 페이지
        {
            url: baseUrl,
            lastModified: currentDate,
            priority: 1.0,
        },
        // 정적 페이지
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: currentDate,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/search`,
            lastModified: currentDate,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/bookmarks`,
            lastModified: currentDate,
            priority: 0.5,
        },
        // 블로그
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog/menopause-symptoms-guide`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/sleep-quality-improvement`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/stress-management-techniques`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/iron-deficiency-women`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/hormone-balance-foods`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/exercise-for-40s-women`,
            lastModified: currentDate,
            priority: 0.8,
        },
        // 가이드 인덱스
        {
            url: `${baseUrl}/guide`,
            lastModified: currentDate,
            priority: 0.9,
        },
        // 가이드 페이지
        {
            url: `${baseUrl}/guide/hormone-basics`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guide/30s-health`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guide/40s-health`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guide/50s-health`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guide/sleep`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guide/stress`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guide/nutrition`,
            lastModified: currentDate,
            priority: 0.8,
        },
        // 도구 페이지 (소개)
        {
            url: `${baseUrl}/tools`,
            lastModified: currentDate,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tools/hormone`,
            lastModified: currentDate,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tools/sleep`,
            lastModified: currentDate,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tools/stress`,
            lastModified: currentDate,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tools/body-age`,
            lastModified: currentDate,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tools/nutrients`,
            lastModified: currentDate,
            priority: 0.9,
        },
        // 도구 테스트 페이지 (동적 페이지이므로 우선순위 낮춤)
        {
            url: `${baseUrl}/tools/hormone/test`,
            lastModified: currentDate,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/sleep/test`,
            lastModified: currentDate,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/stress/test`,
            lastModified: currentDate,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/body-age/test`,
            lastModified: currentDate,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/nutrients/test`,
            lastModified: currentDate,
            priority: 0.7,
        },
    ];
}
