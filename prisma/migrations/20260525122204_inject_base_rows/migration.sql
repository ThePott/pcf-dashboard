
/*
    배출계수를 db에 자동 생성합니다
*/ 

-- activity_category: 전기, 원소재, 운송
INSERT INTO activity_category (id, label) VALUES
(1, '전기'),
(2, '원소재'),
(3, '운송');

-- activity_description
INSERT INTO activity_description (id, label, activity_category_id) VALUES
(1, '한국전력 기본값', 1),
(2, '플라스틱 1', 2),
(3, '플라스틱 2', 2),
(4, '트럭', 3);

-- emission_factor (version = 고시일, e.g. '2026-01-01')
INSERT INTO emission_factor (id, version, company_id, value, activity_unit, activity_description_id) VALUES
(1, '2026-01-01'::timestamp, NULL, 0.456, 'kWh',    1),
(2, '2026-01-01'::timestamp, NULL, 2.3,   'kg',     2),
(3, '2026-01-01'::timestamp, NULL, 3.2,   'kg',     3),
(4, '2026-01-01'::timestamp, NULL, 3.5,   'ton_km', 4);
