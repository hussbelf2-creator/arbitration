"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type CurrencyCode = "USD" | "SAR" | "AED" | "EUR";

interface CurrencyOption {
  code: CurrencyCode;
  rate: number;
  symbol: string;
  label: string;
}

const CURRENCIES: CurrencyOption[] = [
  { code: "USD", rate: 1, symbol: "$", label: "دولار أمريكي" },
  { code: "SAR", rate: 3.75, symbol: "ر.س", label: "ريال سعودي" },
  { code: "AED", rate: 3.67, symbol: "د.إ", label: "درهم إماراتي" },
  { code: "EUR", rate: 0.92, symbol: "€", label: "يورو أوروبي" },
];

const PRESETS = [250000, 1000000, 5000000, 15000000, 50000000];

export default function CalculatorPage() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [currencyRate, setCurrencyRate] = useState<number>(1.0);
  const [currencySymbol, setCurrencySymbol] = useState<string>("$");
  const [claimAmountUSD, setClaimAmountUSD] = useState<number>(1000000);
  const [claimInputValue, setClaimInputValue] = useState<string>("1000000");
  const [activePreset, setActivePreset] = useState<number | null>(1000000);
  const [arbitratorsCount, setArbitratorsCount] = useState<1 | 3>(1);
  const [isExpedited, setIsExpedited] = useState<boolean>(false);
  const [hasHearing, setHasHearing] = useState<boolean>(true);
  const [hasSecretary, setHasSecretary] = useState<boolean>(true);
  const [pdfStatus, setPdfStatus] = useState<"idle" | "loading" | "done">(
    "idle"
  );

  const calculateFeesUSD = (amount: number) => {
    const regFee = 5000;

    let adminFee = 0;
    if (amount <= 100000) {
      adminFee = 2500;
    } else if (amount <= 500000) {
      adminFee = 2500 + (amount - 100000) * 0.0125;
    } else if (amount <= 2000000) {
      adminFee = 7500 + (amount - 500000) * 0.008;
    } else if (amount <= 10000000) {
      adminFee = 19500 + (amount - 2000000) * 0.0035;
    } else {
      adminFee = Math.min(85000, 47500 + (amount - 10000000) * 0.001);
    }

    let arbFee = 0;
    if (arbitratorsCount === 1) {
      if (amount <= 100000) {
        arbFee = 7500;
      } else if (amount <= 500000) {
        arbFee = 7500 + (amount - 100000) * 0.035;
      } else if (amount <= 2000000) {
        arbFee = 21500 + (amount - 500000) * 0.022;
      } else if (amount <= 10000000) {
        arbFee = 54500 + (amount - 2000000) * 0.0095;
      } else {
        arbFee = 130500 + (amount - 10000000) * 0.003;
      }
    } else {
      if (amount <= 100000) {
        arbFee = 18500;
      } else if (amount <= 500000) {
        arbFee = 18500 + (amount - 100000) * 0.085;
      } else if (amount <= 2000000) {
        arbFee = 52500 + (amount - 500000) * 0.055;
      } else if (amount <= 10000000) {
        arbFee = 135000 + (amount - 2000000) * 0.024;
      } else {
        arbFee = 327000 + (amount - 10000000) * 0.0075;
      }
    }

    if (isExpedited) {
      arbFee = arbFee * 0.85;
      adminFee = adminFee * 1.15;
    }

    let logistics = 0;
    if (hasHearing) logistics += 2500;
    if (hasSecretary) logistics += 1500;

    return {
      registration: regFee,
      admin: Math.round(adminFee),
      arbitrators: Math.round(arbFee),
      logistics,
    };
  };

  const feesUSD = calculateFeesUSD(claimAmountUSD);
  const regConverted = Math.round(feesUSD.registration * currencyRate);
  const adminConverted = Math.round(feesUSD.admin * currencyRate);
  const tribunalConverted = Math.round(feesUSD.arbitrators * currencyRate);
  const logisticsConverted = Math.round(feesUSD.logistics * currencyRate);
  const totalConverted =
    regConverted + adminConverted + tribunalConverted + logisticsConverted;
  const shareConverted = Math.round(totalConverted / 2);

  const handleSelectCurrency = (opt: CurrencyOption) => {
    setCurrency(opt.code);
    setCurrencyRate(opt.rate);
    setCurrencySymbol(opt.symbol);
    setClaimInputValue(String(Math.round(claimAmountUSD * opt.rate)));
  };

  const handleClaimInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setClaimInputValue(raw);
    const val = parseFloat(raw) || 0;
    setClaimAmountUSD(Math.max(10000, val / currencyRate));
    setActivePreset(null);
  };

  const handleSelectPreset = (valUSD: number) => {
    setClaimAmountUSD(valUSD);
    setClaimInputValue(String(Math.round(valUSD * currencyRate)));
    setActivePreset(valUSD);
  };

  const handleDownloadPdf = () => {
    if (pdfStatus !== "idle") return;
    setPdfStatus("loading");
    setTimeout(() => {
      setPdfStatus("done");
      setTimeout(() => {
        setPdfStatus("idle");
      }, 3000);
    }, 1200);
  };

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-surface-ivory">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden bg-emerald-deepest text-surface-ivory py-space-xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
              <svg
                className="w-[700px] h-[700px] text-gold-light"
                fill="none"
                viewBox="0 0 200 200"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  stroke="currentColor"
                  strokeDasharray="3 3"
                  strokeWidth="0.75"
                ></circle>
                <circle
                  cx="100"
                  cy="100"
                  r="75"
                  stroke="currentColor"
                  strokeWidth="1.2"
                ></circle>
                <path
                  d="M100 20 L100 180 M20 100 L180 100 M43.4 43.4 L156.6 156.6 M43.4 156.6 L156.6 43.4"
                  stroke="currentColor"
                  strokeWidth="0.5"
                ></path>
                <polygon
                  points="100,30 115,70 160,70 125,95 140,140 100,115 60,140 75,95 40,70 85,70"
                  stroke="currentColor"
                  strokeWidth="0.75"
                ></polygon>
              </svg>
            </div>
            <div className="max-w-[1360px] mx-auto px-gutter relative z-10 flex flex-col md:flex-row items-center justify-between gap-space-lg">
              <div className="flex flex-col gap-space-xs text-right max-w-3xl">
                <div className="inline-flex items-center gap-space-xs text-gold-light font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-sm">
                    calculate
                  </span>
                  <span className="">
                    الملحق المالي المعتمد وفق قواعد أونسيترال واللائحة المؤسسية
                    2025
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-surface-ivory tracking-tight">
                  حاسبة الرسوم والمصاريف التحكيمية التقديرية
                </h1>
                <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
                  أداة حسابية مستقلة لتقدير النفقات الإدارية وأتعاب هيئة التحكيم
                  وفق الشرائح التناسبية لقيمة النزاع المتنازع عليها، مع مراعاة
                  تشكيل الهيئة والمسار الإجرائي المختار.
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-space-md p-space-md bg-primary-container/80 rounded-xl shadow-md shrink-0">
                <div className="w-12 h-12 rounded-lg bg-emerald-deepest flex items-center justify-center text-gold-light shadow-sm">
                  <span className="material-symbols-outlined text-2xl">
                    verified
                  </span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-label-sm text-label-sm text-gold-light">
                    الشفافية الإجرائية
                  </span>
                  <span className="font-title-md text-title-md text-surface-ivory">
                    لا رسوم إدارية خفية
                  </span>
                  <span className="font-legal-code text-legal-code text-surface-container">
                    معدلات قياسية خاضعة للمراجعة الرئاسية
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1360px] mx-auto px-gutter py-space-xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* Right Column: Interactive Dispute Assessment Engine */}
              <section className="lg:col-span-7 flex flex-col gap-space-lg">
                {/* Currency Selection Module */}
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-[0_2px_12px_rgba(6,61,49,0.04)] flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-primary flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-gold-deep">
                        monetization_on
                      </span>
                      1. تحديد عملة النزاع والتقاضي
                    </span>
                    <span className="font-legal-code text-legal-code text-on-surface-variant">
                      الأساس النقدي للحكم النهائي
                    </span>
                  </div>
                  <div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm"
                    id="currency-group"
                  >
                    {CURRENCIES.map((opt) => {
                      const isActive = currency === opt.code;
                      return (
                        <button
                          key={opt.code}
                          onClick={() => handleSelectCurrency(opt)}
                          className={`currency-btn px-space-md py-space-sm rounded-lg flex flex-col items-center justify-center gap-1 transition-all ${
                            isActive
                              ? "active-currency bg-primary-container text-surface-ivory shadow-sm"
                              : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                          }`}
                          data-currency={opt.code}
                          data-rate={opt.rate}
                          data-symbol={opt.symbol}
                          type="button"
                        >
                          <span className="font-title-md text-title-md font-bold">
                            {opt.code}
                          </span>
                          <span
                            className={`font-legal-code text-legal-code ${
                              isActive
                                ? "text-gold-light"
                                : "text-on-surface-variant"
                            }`}
                          >
                            {opt.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Claim Amount Entry & Fast Presets */}
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-[0_2px_12px_rgba(6,61,49,0.04)] flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <label
                      className="font-title-md text-title-md text-primary flex items-center gap-space-xs"
                      htmlFor="claim-amount-input"
                    >
                      <span className="material-symbols-outlined text-gold-deep">
                        account_balance_wallet
                      </span>
                      2. إجمالي قيمة المطالبة المالية المتنازع عليها
                    </label>
                    <span className="font-label-sm text-label-sm text-gold-deep bg-surface-parchment px-space-sm py-1 rounded">
                      شاملة التعويضات
                    </span>
                  </div>
                  <div className="relative flex items-center">
                    <span
                      className="absolute right-4 font-headline-sm text-headline-sm text-gold-deep select-none"
                      id="claim-currency-label"
                    >
                      {currencySymbol}
                    </span>
                    <input
                      value={claimInputValue}
                      onChange={handleClaimInputChange}
                      className="w-full bg-surface-ivory pr-12 pl-24 py-space-md rounded-lg font-headline-sm text-headline-sm text-primary placeholder-outline focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner"
                      id="claim-amount-input"
                      max="250000000"
                      min="10000"
                      placeholder="0.00"
                      step="10000"
                      type="number"
                    />
                    <span
                      className="absolute left-4 font-label-lg text-label-lg text-on-surface-variant bg-surface-container px-2 py-1 rounded"
                      id="currency-tag"
                    >
                      {currency}
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <span className="font-legal-code text-legal-code text-on-surface-variant">
                      مطالبات نمطية سريعة:
                    </span>
                    <div className="flex flex-wrap items-center gap-space-xs">
                      {PRESETS.map((val) => {
                        const isSelected = activePreset === val;
                        return (
                          <button
                            key={val}
                            onClick={() => handleSelectPreset(val)}
                            className={`preset-btn px-space-sm py-1 rounded font-label-sm text-label-sm transition-colors ${
                              isSelected
                                ? "bg-primary text-surface-ivory"
                                : "bg-surface-container text-primary hover:bg-gold-light hover:text-emerald-deepest"
                            }`}
                            data-val={val}
                            type="button"
                          >
                            {val.toLocaleString()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Tribunal Composition Selector */}
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-[0_2px_12px_rgba(6,61,49,0.04)] flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-primary flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-gold-deep">
                        groups
                      </span>
                      3. تشكيل هيئة التحكيم
                    </span>
                    <span className="font-legal-code text-legal-code text-on-surface-variant">
                      حسب العقد أو الاتفاق اللاحق
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {/* Sole Arbitrator */}
                    <label
                      className={`relative cursor-pointer p-space-md rounded-xl transition-all flex flex-col gap-space-xs ${
                        arbitratorsCount === 1
                          ? "bg-surface-container shadow-sm"
                          : "bg-surface-container-low hover:bg-surface-container"
                      }`}
                      id="card-tribunal-1"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-space-xs">
                          <input
                            checked={arbitratorsCount === 1}
                            onChange={() => setArbitratorsCount(1)}
                            className="accent-primary w-4 h-4 cursor-pointer"
                            name="tribunal_type"
                            type="radio"
                            value="1"
                          />
                          <span className="font-headline-sm text-headline-sm text-primary">
                            محكم فرد
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-emerald-subtle text-status-success">
                          أسرع وأقل كلفة
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        يتولى الفصل في النزاع محكم معتمد واحد يعينه المركز أو
                        يختاره الطرفان اتفاقاً. مناسب للنزاعات متوسطة القيمة
                        ولتسريع إصدار الحكم.
                      </p>
                      <div className="pt-space-xs flex items-center gap-space-xs text-gold-deep font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-sm">
                          schedule
                        </span>
                        <span className="">متوسط المدة: 6 إلى 9 أشهر</span>
                      </div>
                    </label>
                    {/* Three Arbitrators */}
                    <label
                      className={`relative cursor-pointer p-space-md rounded-xl transition-all flex flex-col gap-space-xs ${
                        arbitratorsCount === 3
                          ? "bg-surface-container shadow-sm"
                          : "bg-surface-container-low hover:bg-surface-container"
                      }`}
                      id="card-tribunal-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-space-xs">
                          <input
                            checked={arbitratorsCount === 3}
                            onChange={() => setArbitratorsCount(3)}
                            className="accent-primary w-4 h-4 cursor-pointer"
                            name="tribunal_type"
                            type="radio"
                            value="3"
                          />
                          <span className="font-headline-sm text-headline-sm text-primary">
                            هيئة ثلاثية
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-parchment text-secondary">
                          قضايا معقدة وكبرى
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        رئيس هيئة ومحكمان مرشحان من الأطراف. خيار مفضل في العقود
                        الاستثمارية والإنشائية متداخلة الاختصاصات.
                      </p>
                      <div className="pt-space-xs flex items-center gap-space-xs text-gold-deep font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-sm">
                          balance
                        </span>
                        <span className="">توازن تمثيلي ثلاثي الأبعاد</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Procedural & Administrative Add-ons */}
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-[0_2px_12px_rgba(6,61,49,0.04)] flex flex-col gap-space-md">
                  <span className="font-title-md text-title-md text-primary flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-gold-deep">
                      tune
                    </span>
                    4. المسارات والخدمات اللوجستية التكميلية
                  </span>
                  <div className="flex flex-col gap-space-sm">
                    {/* Expedited toggle */}
                    <label className="flex items-start justify-between gap-space-md p-space-md bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
                      <div className="flex items-start gap-space-sm">
                        <div className="p-1 bg-surface-container-lowest rounded text-gold-deep shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-lg">
                            bolt
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-lg text-label-lg text-primary font-bold">
                            المسار المعجل للأحكام (Expedited Procedure)
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            تقليص المهل الزمنية للمذكرات وإصدار الحكم الإلزامي
                            النهائي خلال فترة أقصاها 6 أشهر فقط.
                          </span>
                        </div>
                      </div>
                      <div className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                        <input
                          checked={isExpedited}
                          onChange={(e) => setIsExpedited(e.target.checked)}
                          className="sr-only peer"
                          id="toggle-expedited"
                          type="checkbox"
                        />
                        <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                      </div>
                    </label>
                    {/* Hearing Facilities */}
                    <label className="flex items-start justify-between gap-space-md p-space-md bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
                      <div className="flex items-start gap-space-sm">
                        <div className="p-1 bg-surface-container-lowest rounded text-gold-deep shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-lg">
                            videocam
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-lg text-label-lg text-primary font-bold">
                            قاعات الجلسات الهجينة والافتراضية والتدوين اللحظي
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            تأمين غرف التحكيم الرقمية الموثقة مع النسخ الصوتي
                            القانوني الفوري لجلسات المرافعة الشفهية.
                          </span>
                        </div>
                      </div>
                      <input
                        checked={hasHearing}
                        onChange={(e) => setHasHearing(e.target.checked)}
                        className="accent-primary w-5 h-5 rounded cursor-pointer mt-1"
                        id="toggle-hearing"
                        type="checkbox"
                      />
                    </label>
                    {/* Tribunal Secretary */}
                    <label className="flex items-start justify-between gap-space-md p-space-md bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
                      <div className="flex items-start gap-space-sm">
                        <div className="p-1 bg-surface-container-lowest rounded text-gold-deep shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-lg">
                            history_edu
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-lg text-label-lg text-primary font-bold">
                            سكرتارية هيئة التحكيم القانونية المستقلة
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            مستشار قانوني مقيم لتنسيق الدفوع والمذكرات وحفظ سجل
                            القيد الرسمي للدعوى.
                          </span>
                        </div>
                      </div>
                      <input
                        checked={hasSecretary}
                        onChange={(e) => setHasSecretary(e.target.checked)}
                        className="accent-primary w-5 h-5 rounded cursor-pointer mt-1"
                        id="toggle-secretary"
                        type="checkbox"
                      />
                    </label>
                  </div>
                </div>

                {/* Institutional Trust Banner */}
                <div className="bg-surface-parchment p-space-md rounded-xl flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-gold-light flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">shield</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="font-title-md text-title-md text-primary font-bold">
                      الحساب البنكي الائتماني المودع (Escrow Protection)
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      تودع كافة مبالغ الأتعاب والمصاريف في حساب أمانات تحكيمي
                      خاضع لمراقبة الأمانة العامة، ولا تصرف الدفعات النهائية
                      للمحكمين إلا بعد تسليم مسودة الحكم النهائي المعتمد واستيفاء
                      كافة الشروط الشكلية.
                    </p>
                  </div>
                </div>
              </section>

              {/* Left Column: Sticky Summary & Formal Institutional Estimation */}
              <aside className="lg:col-span-5 flex flex-col gap-space-md lg:sticky lg:top-24">
                {/* Sovereign Cost Breakdown Card */}
                <div className="bg-emerald-deepest text-surface-ivory rounded-xl p-space-lg shadow-xl relative overflow-hidden flex flex-col gap-space-md">
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold-light/5 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="flex items-center justify-between pb-space-sm bg-primary-container/40 p-space-sm rounded-lg">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-gold-light text-xl">
                        receipt_long
                      </span>
                      <span className="font-title-md text-title-md text-surface-ivory font-bold">
                        البيان المالي التقديري
                      </span>
                    </div>
                    <span className="font-legal-code text-legal-code text-gold-light bg-primary px-2 py-0.5 rounded">
                      رقم القيد: EST-2025
                    </span>
                  </div>
                  {/* Quantitative Breakdown List */}
                  <div className="flex flex-col gap-space-sm py-space-xs text-right">
                    {/* Registration Fee */}
                    <div className="flex items-center justify-between py-1 bg-primary-container/20 px-space-sm rounded">
                      <div className="flex flex-col">
                        <span className="font-body-sm text-body-sm text-surface-ivory font-semibold">
                          رسوم تسجيل وقيد الدعوى
                        </span>
                        <span className="font-legal-code text-legal-code text-surface-container">
                          رسوم إدارية ثابتة غير مستردة
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span
                          className="font-title-md text-title-md text-gold-light font-bold"
                          id="display-reg-fee"
                        >
                          {regConverted.toLocaleString()}
                        </span>
                        <span className="currency-unit-label font-legal-code text-legal-code text-surface-container">
                          {currency}
                        </span>
                      </div>
                    </div>
                    {/* Administrative Cost */}
                    <div className="flex items-center justify-between py-1 bg-primary-container/20 px-space-sm rounded">
                      <div className="flex flex-col">
                        <span className="font-body-sm text-body-sm text-surface-ivory font-semibold">
                          المصروفات الإدارية للمكتب
                        </span>
                        <span className="font-legal-code text-legal-code text-surface-container">
                          إشراف وتدقيق السجلات والمذكرات
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span
                          className="font-title-md text-title-md text-gold-light font-bold"
                          id="display-admin-fee"
                        >
                          {adminConverted.toLocaleString()}
                        </span>
                        <span className="currency-unit-label font-legal-code text-legal-code text-surface-container">
                          {currency}
                        </span>
                      </div>
                    </div>
                    {/* Arbitrators Fees */}
                    <div className="flex items-center justify-between py-1 bg-primary-container/20 px-space-sm rounded">
                      <div className="flex flex-col">
                        <span
                          className="font-body-sm text-body-sm text-surface-ivory font-semibold"
                          id="arbitrator-label"
                        >
                          {arbitratorsCount === 1
                            ? "أتعاب هيئة التحكيم (محكم فرد)"
                            : "أتعاب هيئة التحكيم (هيئة ثلاثية)"}
                        </span>
                        <span className="font-legal-code text-legal-code text-surface-container">
                          محسوبة طبقاً لجدول الشرائح التراكمية
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span
                          className="font-title-md text-title-md text-gold-light font-bold"
                          id="display-tribunal-fee"
                        >
                          {tribunalConverted.toLocaleString()}
                        </span>
                        <span className="currency-unit-label font-legal-code text-legal-code text-surface-container">
                          {currency}
                        </span>
                      </div>
                    </div>
                    {/* Technical & Ancillary Fees */}
                    <div className="flex items-center justify-between py-1 bg-primary-container/20 px-space-sm rounded">
                      <div className="flex flex-col">
                        <span className="font-body-sm text-body-sm text-surface-ivory font-semibold">
                          نفقات الجلسات وأمانة السر
                        </span>
                        <span className="font-legal-code text-legal-code text-surface-container">
                          تجهيزات رقمية وقاعات استماع
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span
                          className="font-title-md text-title-md text-gold-light font-bold"
                          id="display-logistics-fee"
                        >
                          {logisticsConverted.toLocaleString()}
                        </span>
                        <span className="currency-unit-label font-legal-code text-legal-code text-surface-container">
                          {currency}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Total Calculation Banner */}
                  <div className="p-space-md rounded-xl bg-primary flex flex-col gap-1 text-right shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="font-label-lg text-label-lg text-surface-ivory font-bold">
                        المجموع التقديري الإجمالي
                      </span>
                      <span className="font-legal-code text-legal-code text-gold-light bg-primary-container px-2 py-0.5 rounded">
                        يوزع مناصفة بين الطرفين
                      </span>
                    </div>
                    <div className="flex items-baseline justify-end gap-2 pt-1">
                      <span
                        className="font-headline-lg text-headline-lg text-gold-light font-bold tracking-tight"
                        id="display-total-fee"
                      >
                        {totalConverted.toLocaleString()}
                      </span>
                      <span className="currency-unit-label font-title-md text-title-md text-surface-ivory">
                        {currency}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-space-xs text-surface-container font-legal-code text-legal-code">
                      <span className="">حصة كل طرف (50%):</span>
                      <span
                        className="text-surface-ivory font-bold"
                        id="display-party-share"
                      >
                        {shareConverted.toLocaleString()} {currency}
                      </span>
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <Link
                      className="w-full py-space-sm px-space-md rounded-lg bg-gold-light text-emerald-deepest font-title-md text-title-md font-bold hover:bg-gold-deep hover:text-surface-ivory transition-all flex items-center justify-center gap-space-xs shadow-md"
                      data-path="qayd-dawa"
                      href="/new-case"
                    >
                      <span className="material-symbols-outlined text-xl">
                        gavel
                      </span>
                      <span className="">المتابعة وقيد صحيفة الدعوى</span>
                    </Link>
                    <button
                      onClick={handleDownloadPdf}
                      className="w-full py-space-sm px-space-md rounded-lg bg-primary-container text-surface-ivory hover:bg-surface-container-highest hover:text-primary font-label-lg text-label-lg transition-all flex items-center justify-center gap-space-xs"
                      id="btn-download-pdf"
                      type="button"
                    >
                      {pdfStatus === "loading" && (
                        <>
                          <span className="material-symbols-outlined text-lg animate-spin">
                            refresh
                          </span>
                          <span>جاري إنشاء البيان الرسمي المختوم...</span>
                        </>
                      )}
                      {pdfStatus === "done" && (
                        <>
                          <span className="material-symbols-outlined text-lg text-gold-light">
                            check_circle
                          </span>
                          <span>تم تصدير البيان المعتمد (PDF)</span>
                        </>
                      )}
                      {pdfStatus === "idle" && (
                        <>
                          <span className="material-symbols-outlined text-lg">
                            download
                          </span>
                          <span className="">
                            تحميل المستند المالي كتقرير رسمي (PDF)
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-space-xs pt-1 text-center font-legal-code text-legal-code text-surface-container">
                    <span className="material-symbols-outlined text-gold-light text-base">
                      lock
                    </span>
                    <span className="">
                      التقدير غير ملزم قبل المراجعة والاعتماد الرسمي من الأمانة
                      العامة
                    </span>
                  </div>
                </div>

                {/* Official Statutory Footnote & Regulatory Clauses */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(6,61,49,0.04)] flex flex-col gap-space-sm text-right">
                  <div className="flex items-center gap-space-xs text-primary font-title-md text-title-md">
                    <span className="material-symbols-outlined text-gold-deep text-lg">
                      menu_book
                    </span>
                    <span className="">قواعد استرداد وتسوية النفقات</span>
                  </div>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed list-disc pr-space-md">
                    <li className="">
                      في حال تم تسوية النزاع أو سحب الدعوى قبل تشكيل هيئة
                      التحكيم، يتم استرداد 75% من أتعاب المحكمين المودعة.
                    </li>
                    <li className="">
                      إذا تم الصلح بعد بدء جلسات المرافعة وقبل حجز الدعوى للحكم،
                      يحق للأمانة العامة إعادة ما يصل إلى 40% من الأتعاب
                      المتبقية.
                    </li>
                    <li className="">
                      يتحمل الطرف الخاسر نفقات التحكيم وأتعاب دفاع الطرف الرابح
                      مالم تقرر الهيئة توزيعها بنسب مغايرة بموجب تسبيب صريح.
                    </li>
                  </ul>
                  <div className="bg-surface-container-low p-space-xs rounded flex items-center justify-between font-legal-code text-legal-code text-on-surface-variant mt-1">
                    <span className="">المرجع اللائحي: المادة 41 / الفقرة ج</span>
                    <Link
                      className="text-gold-deep hover:underline"
                      data-path="al-lawaeh-wal-qararat"
                      href="/knowledge-center"
                    >
                      عرض اللائحة الكاملة
                    </Link>
                  </div>
                </div>
              </aside>
            </div>

            {/* Comparative Table of Sliding Fee Brackets */}
            <div className="mt-space-2xl bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_2px_12px_rgba(6,61,49,0.04)] flex flex-col gap-space-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                <div className="flex flex-col text-right">
                  <h2 className="font-headline-sm text-headline-sm text-primary">
                    جدول شرائح أتعاب التحكيم التراكمية المعتمدة
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    الجدول النسبي المعتمد لتطبيق أتعاب الهيئة ورسوم الإدارة لعام
                    2025
                  </p>
                </div>
                <div className="flex items-center gap-space-xs font-legal-code text-legal-code text-gold-deep bg-surface-parchment px-space-md py-space-xs rounded-lg">
                  <span className="material-symbols-outlined text-base">
                    verified_user
                  </span>
                  <span className="">
                    وفق توجيهات الجمعية العمومية للتحكيم الدولي
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right font-body-sm text-body-sm">
                  <thead>
                    <tr className="bg-surface-container text-primary font-bold">
                      <th className="p-space-sm rounded-r">
                        شريحة النزاع (بالدولار الأمريكي)
                      </th>
                      <th className="p-space-sm">الرسوم الإدارية للمركز</th>
                      <th className="p-space-sm">أتعاب المحكم الفرد</th>
                      <th className="p-space-sm rounded-l">
                        أتعاب الهيئة الثلاثية (إجمالي)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-on-surface">
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="p-space-sm font-semibold">
                        حتى 100,000 $
                      </td>
                      <td className="p-space-sm">2,500 $ مقطوعة</td>
                      <td className="p-space-sm">7,500 $ مقطوعة</td>
                      <td className="p-space-sm">18,500 $ مقطوعة</td>
                    </tr>
                    <tr className="bg-surface-ivory/50 hover:bg-surface-container-low transition-colors">
                      <td className="p-space-sm font-semibold">
                        من 100,001 إلى 500,000 $
                      </td>
                      <td className="p-space-sm">
                        2,500 $ + 1.25% من الزيادة
                      </td>
                      <td className="p-space-sm">7,500 $ + 3.5% من الزيادة</td>
                      <td className="p-space-sm">18,500 $ + 8.5% من الزيادة</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="p-space-sm font-semibold">
                        من 500,001 إلى 2,000,000 $
                      </td>
                      <td className="p-space-sm">7,500 $ + 0.8% من الزيادة</td>
                      <td className="p-space-sm">21,500 $ + 2.2% من الزيادة</td>
                      <td className="p-space-sm">52,500 $ + 5.5% من الزيادة</td>
                    </tr>
                    <tr className="bg-surface-ivory/50 hover:bg-surface-container-low transition-colors">
                      <td className="p-space-sm font-semibold">
                        من 2,000,001 إلى 10,000,000 $
                      </td>
                      <td className="p-space-sm">
                        19,500 $ + 0.35% من الزيادة
                      </td>
                      <td className="p-space-sm">
                        54,500 $ + 0.95% من الزيادة
                      </td>
                      <td className="p-space-sm">
                        135,000 $ + 2.4% من الزيادة
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="p-space-sm font-semibold">
                        ما يجاوز 10,000,000 $
                      </td>
                      <td className="p-space-sm">
                        47,500 $ + 0.1% من الزيادة (سقف 85,000 $)
                      </td>
                      <td className="p-space-sm">
                        130,500 $ + 0.3% من الزيادة
                      </td>
                      <td className="p-space-sm">
                        327,000 $ + 0.75% من الزيادة
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-emerald-deepest text-surface-ivory mt-space-2xl">
        <div className="max-w-[1360px] mx-auto px-gutter pt-space-2xl pb-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-3 h-3 rounded-full bg-gold-light"></div>
                <span className="font-headline-sm text-headline-sm text-surface-ivory">
                  المكتب الدولي للتحكيم
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                هيئة قضائية تحكيمية دولية مستقلة مكرسة لتسوية النزاعات التجارية
                والاستثمارية عبر الحدود بموجب اتفاقية نيويورك 1958 وقواعد
                الأونسيترال الدولية.
              </p>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <span className="material-symbols-outlined text-gold-light text-xl">
                  verified_user
                </span>
                <span className="font-legal-code text-legal-code text-gold-light">
                  معتمد وموثق دولياً وفق المعايير الدبلوماسية
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-md">
              <span className="font-title-md text-title-md text-surface-ivory">
                المقار والمكاتب الإقليمية
              </span>
              <div className="flex flex-col gap-space-sm text-surface-container-high font-body-sm text-body-sm">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-gold-light text-lg">
                    location_on
                  </span>
                  <div>
                    <strong className="text-surface-ivory block font-label-sm text-label-sm">
                      الرياض (المقر الرئيسي)
                    </strong>
                    <span className="">
                      مركز الملك عبد الله المالي، برج التحكيم الدولي
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-gold-light text-lg">
                    location_on
                  </span>
                  <div>
                    <strong className="text-surface-ivory block font-label-sm text-label-sm">
                      جنيف
                    </strong>
                    <span className="">
                      Rue du Rhône 42, Quartier des Banques
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-gold-light text-lg">
                    location_on
                  </span>
                  <div>
                    <strong className="text-surface-ivory block font-label-sm text-label-sm">
                      لندن
                    </strong>
                    <span className="">
                      1 Crown Office Row, Temple, London EC4Y
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-space-md">
              <span className="font-title-md text-title-md text-surface-ivory">
                الإجراءات والخدمات القانونية
              </span>
              <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-container-high">
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    data-path="qayd-dawa"
                    href="/new-case"
                  >
                    إيداع طلب تحكيم عاجل
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    data-path="hasebat-al-rusoom"
                    href="/calculator"
                  >
                    جدول المصاريف والأتعاب الإدارية
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    data-path="daleel-al-mohakameen"
                    href="/arbitrators"
                  >
                    قائمة المحكمين المعتمدين وجداول الخبراء
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    data-path="al-lawaeh-wal-qararat"
                    href="/knowledge-center"
                  >
                    لائحة التحكيم المؤسسي وقواعد الوساطة
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    data-path="namathij-shorout-al-tahkeem"
                    href="/services#model-clauses"
                  >
                    النماذج القياسية لشرط التحكيم التعاقدي
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-md">
              <span className="font-title-md text-title-md text-surface-ivory">
                الامتثال والاتفاقيات الدولية
              </span>
              <div className="bg-primary-container p-space-md rounded-lg flex flex-col gap-space-xs shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                <span className="font-label-sm text-label-sm text-gold-light">
                  اتفاقية نيويورك 1958
                </span>
                <p className="font-legal-code text-legal-code text-surface-container leading-relaxed">
                  تتمتع أحكام المحكمين الصادرة عن المكتب بالنفاذ الإلزامي المتبادل
                  في أكثر من 172 دولة عضواً في اتفاقية الاعتراف بقرارات التحكيم
                  الأجنبية وتنفيذها.
                </p>
              </div>
              <div className="flex flex-col gap-1 text-surface-container-high font-legal-code text-legal-code">
                <span className="text-gold-light font-label-sm text-label-sm">
                  سجل الاعتماد المؤسسي
                </span>
                <span className="">REG-INT-ARB/7702-SA-CH-UK</span>
              </div>
            </div>
          </div>
          <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-surface-container-high">
            <div className="flex items-center gap-space-md text-right">
              <p className="">
                © 2025 المكتب الدولي للتحكيم وتسوية المنازعات (IOADR). جميع
                الحقوق الملكية والنظامية محفوظة.
              </p>
            </div>
            <div className="flex items-center gap-space-lg font-label-sm text-label-sm">
              <Link
                className="hover:text-gold-light transition-colors"
                data-path="seeyasat-al-khosousiya"
                href="/knowledge-center"
              >
                سياسة الخصوصية والسرية المصرفية
              </Link>
              <Link
                className="hover:text-gold-light transition-colors"
                data-path="al-shoroot-wal-ahkam"
                href="/knowledge-center"
              >
                الشروط والأحكام العامة
              </Link>
              <Link
                className="hover:text-gold-light transition-colors"
                data-path="meethaq-al-sharaf-al-qadaee"
                href="/knowledge-center"
              >
                ميثاق الشرف القضائي
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

