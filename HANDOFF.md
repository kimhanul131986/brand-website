# 세션 인수인계 문서
생성일시: 2026-04-26

## 프로젝트 개요
브랜드 웹사이트 (Next.js) + 경쟁사 분석 자동화 파이프라인. 구브네치킨 브랜드 관련 마케팅 리서치 및 웹사이트 개발을 병행 중.

## 이번 세션에서 한 일
- `/경쟁사분석` 스킬 프롬프트 내용 확인
- bhc 경쟁사 분석을 Sub-Agent 3개(광고 분석관 / 커머스 추적관 / 콘텐츠 스캐너) 병렬 실행
- 3개 에이전트 결과를 종합해 최종 리포트 작성 및 저장
- Sub-Agent 3개를 재사용 가능한 `.claude/agents/` 파일로 저장

## 수정된 파일
- `reports/경쟁사분석_bhc_2026-04-26.md`: bhc 경쟁사 분석 최종 리포트 (신규 생성)
- `.claude/agents/ad-analyst.md`: 광고 분석관 SOP (신규 생성)
- `.claude/agents/commerce-tracker.md`: 커머스 추적관 SOP (신규 생성)
- `.claude/agents/content-scanner.md`: 콘텐츠 스캐너 SOP (신규 생성)

## 현재 상태
- bhc 분석 리포트 완성. Facebook Ads Library 실수치(활성 광고 수, 리셀러 비율)는 403 오류로 직접 접근 불가 — 브라우저 로그인 상태에서 수동 확인 필요.
- 네이버 쇼핑 페이지도 직접 접근 차단 — 광고 슬롯 vs 자연 검색 구분 불가.
- Sub-Agent 파일 3개는 BRAND와 DATE 변수를 받아 다른 브랜드에도 즉시 재사용 가능.

## 다음 세션에서 해야 할 일
- [ ] `/경쟁사분석 교촌치킨` 또는 `/경쟁사분석 BBQ` 실행해 비교 리포트 생성
- [ ] Facebook Ads Library bhc 실수치 브라우저 직접 확인 후 리포트 보완
- [ ] 3개 에이전트 결과를 자동으로 종합하는 마스터 에이전트 파일 작성 검토
- [ ] 경쟁사 분석 결과를 바탕으로 구브네치킨 마케팅 전략 수립

## 주의사항
- `.claude/agents/` 파일은 Claude Code가 서브에이전트 실행 시 자동으로 참조하는 경로
- bhc 리포트 내 "소비자 부정 키워드" 항목은 실제 데이터 미수집 — 추정값으로 표시됨
- bhc 콰삭킹 1주년 프로모션(오늘은 콰삭각)은 3월 25일 기준 종료 추정 (연장 여부 미확인)

## 참고 컨텍스트
- bhc 광고 직접 확인: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=KR&q=bhc&search_type=keyword_unordered
- bhc 커머스 직접 확인: https://search.shopping.naver.com/search/all?query=bhc
- bhc 콘텐츠 직접 확인: https://www.youtube.com/@bhcchicken
- bhc 핵심 빈틈: 틱톡 한국 공식 계정 부재, D2C 채널 미성숙, 배달앱 이중가격 소비자 불만
