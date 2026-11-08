"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function NewCasePage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/calculator");
  };

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-surface-ivory">
        <div className="flex flex-col w-full">
          {/* Sub-Header / Case Filing Meta Ribbon */}
          <div className="bg-primary text-surface-ivory py-space-md px-gutter shadow-md relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gold-deep/10 pointer-events-none blur-3xl"></div>
            <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md relative z-10">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center text-gold-light shadow-sm">
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    balance
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm text-gold-light tracking-widest uppercase">
                      بوابة الإيداع القضائي الإلكتروني
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-surface-container-lowest/20 text-surface-ivory">
                      مسودة معتمدة
                    </span>
                  </div>
                  <h1 className="font-headline-sm text-headline-sm text-surface-ivory mt-0.5">
                    قيد طلب تحكيم تجاري دولي عاجل
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-space-lg bg-emerald-deepest/60 px-space-md py-space-sm rounded-lg backdrop-blur-sm">
                <div className="flex flex-col text-right">
                  <span className="font-legal-code text-legal-code text-surface-container-high">
                    الرقم المرجعي المؤقت للمسودة:
                  </span>
                  <span className="font-title-md text-title-md text-gold-light tracking-wider font-mono">
                    ARB-2025-0841-DRAFT
                  </span>
                </div>
                <div className="h-8 w-px bg-surface-container-highest/20"></div>
                <div className="flex items-center gap-space-xs text-surface-container-high font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-gold-light text-base">
                    verified
                  </span>
                  <span className="">مشفر بنظام 256-bit AES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Multi-step Progress Navigation */}
          <div className="bg-surface-container-lowest py-space-md px-gutter shadow-sm">
            <div className="max-w-[1360px] mx-auto">
              <div className="grid grid-cols-4 gap-space-md relative">
                {/* Step 1 (Active) */}
                <div className="flex items-center gap-space-sm group cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-primary text-gold-light flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    1
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-gold-deep font-bold">
                      المرحلة الأولى
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold truncate">
                      بيانات الأطراف والصفة
                    </span>
                  </div>
                </div>
                {/* Step 2 (Upcoming) */}
                <div className="flex items-center gap-space-sm opacity-80 group cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-outline">
                      المرحلة الثانية
                    </span>
                    <span className="font-title-md text-title-md text-on-surface truncate">
                      موضوع النزاع والمطالبة
                    </span>
                  </div>
                </div>
                {/* Step 3 (Upcoming) */}
                <div className="flex items-center gap-space-sm opacity-60 group cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-outline">
                      المرحلة الثالثة
                    </span>
                    <span className="font-title-md text-title-md text-on-surface truncate">
                      وثيقة التحكيم والأدلة
                    </span>
                  </div>
                </div>
                {/* Step 4 (Upcoming) */}
                <div className="flex items-center gap-space-sm opacity-60 group cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-bold text-sm shrink-0">
                    4
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-outline">
                      المرحلة النهائية
                    </span>
                    <span className="font-title-md text-title-md text-on-surface truncate">
                      رسوم القيد والإيداع
                    </span>
                  </div>
                </div>
              </div>
              {/* Progress Bar Track */}
              <div className="w-full bg-surface-container h-1 rounded-full mt-space-sm overflow-hidden">
                <div className="bg-gold-deep h-full w-1/4 rounded-full transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Main Canvas */}
          <div className="max-w-[1360px] mx-auto px-gutter py-space-xl w-full flex flex-col gap-space-xl">
            {/* Institutional Guidance Banner */}
            <div className="bg-surface-parchment p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
              <div className="flex items-start gap-space-md">
                <div className="w-10 h-10 rounded-full bg-primary-container text-gold-light flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <span className="material-symbols-outlined text-xl">
                    gavel
                  </span>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-title-md text-title-md text-primary font-bold">
                    إرشادات قيد الدعاوى وفقاً لقواعد أونسيترال ولائحة المركز
                    (إصدار 2025)
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                    يُرجى التأكد من ملء البيانات النظامية بصيغتها الرسمية
                    المسجلة لدى الغرف التجارية أو السجلات الوطنية. تُخطر الأمانة
                    العامة الطرف المحتكم ضده إلكترونياً بالصيغة المعتمدة خلال 48
                    ساعة من قبول الإيداع.
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-space-sm bg-surface-container-lowest px-space-md py-space-sm rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-gold-deep text-lg">
                  schedule
                </span>
                <div className="flex flex-col text-right">
                  <span className="font-label-sm text-label-sm text-outline">
                    متوسط زمن المراجعة
                  </span>
                  <span className="font-body-sm text-body-sm font-bold text-primary">
                    3 أيام عمل رسمية
                  </span>
                </div>
              </div>
            </div>

            {/* Registration Form Section */}
            <form
              className="flex flex-col gap-space-xl"
              onSubmit={handleSubmit}
            >
              {/* Section 1: Parties to the Dispute (Two Column Grid) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
                {/* Claimant (المدعي / طالب التحكيم) */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-full bg-primary text-gold-light flex items-center justify-center font-bold text-xs">
                        أ
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        بيانات المدعي (طالب التحكيم)
                      </h3>
                    </div>
                    <span className="px-space-sm py-1 bg-surface-container text-primary font-label-sm text-label-sm rounded">
                      الطرف الأول
                    </span>
                  </div>
                  {/* Capacity Selector */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-lg text-label-lg text-primary font-semibold">
                      صفة مقدم الطلب في الدعوى
                    </label>
                    <div className="grid grid-cols-3 gap-space-sm mt-1">
                      <label className="flex items-center justify-center gap-space-xs p-space-sm rounded-lg bg-surface-parchment text-primary font-body-sm text-body-sm font-semibold cursor-pointer shadow-sm">
                        <input
                          defaultChecked
                          className="accent-primary"
                          name="claimant_capacity"
                          type="radio"
                          value="principal"
                        />
                        <span className="">أصيل (الشركة)</span>
                      </label>
                      <label className="flex items-center justify-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm cursor-pointer hover:bg-surface-container">
                        <input
                          className="accent-primary"
                          name="claimant_capacity"
                          type="radio"
                          value="counsel"
                        />
                        <span className="">محامٍ معتمد</span>
                      </label>
                      <label className="flex items-center justify-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm cursor-pointer hover:bg-surface-container">
                        <input
                          className="accent-primary"
                          name="claimant_capacity"
                          type="radio"
                          value="agent"
                        />
                        <span className="">وكيل شرعي</span>
                      </label>
                    </div>
                  </div>
                  {/* Claimant Fields */}
                  <div className="flex flex-col gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">
                        الاسم التجاري الكامل أو الصفة القانونية للمدعي *
                      </label>
                      <input
                        className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all"
                        placeholder="مثال: مجموعة المملكة للاستثمارات اللوجستية ش.م.م"
                        type="text"
                        defaultValue="مجموعة الاستثمارات البتروكيماوية المتحدة العالمية"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface-variant">
                          رقم السجل التجاري / الترخيص *
                        </label>
                        <input
                          className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all font-mono"
                          placeholder="مثال: 1010892744"
                          type="text"
                          defaultValue="101049281720"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface-variant">
                          دولة ومقر التأسيس *
                        </label>
                        <select
                          defaultValue="المملكة العربية السعودية (الرياض)"
                          className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all"
                        >
                          <option>المملكة العربية السعودية (الرياض)</option>
                          <option>الإمارات العربية المتحدة (أبوظبي)</option>
                          <option>دولة قطر (الدوحة)</option>
                          <option>سويسرا (جنيف)</option>
                          <option>المملكة المتحدة (لندن)</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface-variant">
                          البريد الإلكتروني المعتمد للتبليغات القضائية *
                        </label>
                        <input
                          className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all"
                          placeholder="legal@petroinvest.sa"
                          type="email"
                          defaultValue="arbitration.docket@petroinvest.sa"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface-variant">
                          رقم الاتصال المباشر للإدارة القانونية *
                        </label>
                        <input
                          className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all text-right font-mono"
                          dir="ltr"
                          placeholder="+966 11 000 0000"
                          type="tel"
                          defaultValue="+966 11 489 2200"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">
                        العنوان الوطني / المقر الرئيسي للإدارة
                      </label>
                      <input
                        className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all"
                        placeholder="طريق الملك فهد، برج الفيصلية، الطابق 24، الرياض"
                        type="text"
                        defaultValue="مركز الملك عبد الله المالي (KAFD)، مجمع الأبراج 4، الرياض"
                      />
                    </div>
                  </div>
                </div>

                {/* Respondent (المدعى عليه / المحتكم ضده) */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-full bg-surface-container text-on-surface font-bold text-xs flex items-center justify-center">
                        ب
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        بيانات المدعى عليه (المحتكم ضده)
                      </h3>
                    </div>
                    <span className="px-space-sm py-1 bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded">
                      الطرف الثاني
                    </span>
                  </div>
                  {/* Respondent Form Fields */}
                  <div className="flex flex-col gap-space-md pt-2">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">
                        الاسم التجاري الكامل للشركة أو الكيان المدعى عليه *
                      </label>
                      <input
                        className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all"
                        placeholder="اسم الشركة كما ورد في العقد محل النزاع"
                        type="text"
                        defaultValue="كونسورتيوم الإنشاءات البحرية عبر الأطلسي المحدودة"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface-variant">
                          رقم التسجيل الدولي / السجل الوطني
                        </label>
                        <input
                          className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all font-mono"
                          placeholder="مثال: CR-UK-8849102"
                          type="text"
                          defaultValue="CHE-449.192.012-LLC"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface-variant">
                          دولة المركز الرئيسي / الموطن القانوني *
                        </label>
                        <select
                          defaultValue="سويسرا (كانتون جنيف)"
                          className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all"
                        >
                          <option>سويسرا (كانتون جنيف)</option>
                          <option>المملكة المتحدة (إنجلترا وويلز)</option>
                          <option>سنغافورة</option>
                          <option>الولايات المتحدة الأمريكية (ديلاوير)</option>
                          <option>فرنسا (باريس)</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface-variant">
                          البريد الإلكتروني المعتمد لتلقي الإشعارات *
                        </label>
                        <input
                          className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all"
                          placeholder="notices@transatlantic-marine.com"
                          type="email"
                          defaultValue="disputes@transatlantic-consortium.ch"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface-variant">
                          هاتف الممثل القانوني أو الإدارة
                        </label>
                        <input
                          className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all text-right font-mono"
                          dir="ltr"
                          placeholder="+41 22 819 0000"
                          type="tel"
                          defaultValue="+41 22 904 1120"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">
                        العنوان المختار أو المقر المسجل لتبليغ لائحة الدعوى *
                      </label>
                      <input
                        className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all font-mono"
                        placeholder="اسم الشارع، المبنى، المدينة، الرمز البريدي"
                        type="text"
                        defaultValue="14 Boulevard des Philosophes, 1205 Genève, Switzerland"
                      />
                    </div>
                    <div className="p-space-sm bg-emerald-subtle rounded-lg flex items-center gap-space-xs text-status-success font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-base">
                        verified_user
                      </span>
                      <span className="">
                        سيتم توجيه التبليغ الدبلوماسي القضائي وفق المعاهدات
                        الثنائية المعترف بها.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Subject Matter & Dispute Claims */}
              <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded-full bg-gold-deep text-surface-ivory flex items-center justify-center font-bold text-xs">
                      ج
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        موضوع النزاع والمطالبات المالية والتعويضات
                      </h3>
                      <p className="font-body-sm text-body-sm text-outline">
                        تحديد الوقائع المادية وتفاصيل الإخلال المزعوم وتعيين
                        المبالغ المتنازع عليها بدقة
                      </p>
                    </div>
                  </div>
                  <span className="font-legal-code text-legal-code bg-surface-parchment text-gold-deep px-space-md py-1.5 rounded-full font-bold">
                    وفقاً للمادة (7) من قواعد الإجراءات
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
                  {/* Dispute Category */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">
                      تصنيف النزاع التجاري *
                    </label>
                    <select
                      defaultValue="عقود الإنشاءات ومشاريع البنية التحتية (FIDIC)"
                      className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all"
                    >
                      <option>
                        عقود الإنشاءات ومشاريع البنية التحتية (FIDIC)
                      </option>
                      <option>عقود الطاقة والنفط والغاز</option>
                      <option>عقود التوريد وسلاسل الإمداد البحرية</option>
                      <option>نزاعات الاستثمار والملكية الفكرية الدولية</option>
                      <option>الخدمات المصرفية والتمويل الهيكلي</option>
                    </select>
                  </div>
                  {/* Claim Amount */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">
                      قيمة المطالبة الإجمالية المتنازع عليها *
                    </label>
                    <div className="flex rounded-lg overflow-hidden bg-surface-container-low focus-within:ring-2 focus-within:ring-gold-deep/30">
                      <input
                        className="w-full p-3 bg-transparent text-primary font-title-md text-title-md font-bold focus:outline-none text-left font-mono"
                        type="text"
                        defaultValue="14,250,000"
                      />
                      <select
                        defaultValue="SAR (ر.س)"
                        className="bg-surface-container-high px-space-md text-primary font-bold text-sm focus:outline-none"
                      >
                        <option>USD ($)</option>
                        <option>SAR (ر.س)</option>
                        <option>EUR (€)</option>
                        <option>GBP (£)</option>
                      </select>
                    </div>
                  </div>
                  {/* Breach Date */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">
                      تاريخ نشوء الإخلال التعاقدي المدعى به *
                    </label>
                    <input
                      className="p-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all font-mono"
                      type="date"
                      defaultValue="2024-11-14"
                    />
                  </div>
                </div>
                {/* Facts Summary Textarea */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">
                      موجز وقائع الدعوى والأسباب الجوهرية للطلب (بما لا يتجاوز
                      1,500 كلمة) *
                    </label>
                    <span className="font-legal-code text-legal-code text-outline">
                      تمت كتابة 184 كلمة
                    </span>
                  </div>
                  <textarea
                    className="p-4 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md leading-relaxed focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-gold-deep/30 transition-all"
                    rows={4}
                    defaultValue="بموجب اتفاقية المقاولة الإنشائية المؤرخة في 12 يناير 2022 بشأن تنفيذ المرحلة البحرية لمحطة الطاقة، امتنع المحتكم ضده دون مسوغ نظامي عن الوفاء بالتزامات التسليم النهائي للمنصات وطلب تعويضات غير مبررة بالمخالفة للبند (18) من الشروط العامة، مما كبّد المحتكم أضراراً مادية مباشرة وتعطيل خطوط الإنتاج. يطالب المحتكم بإلزام المحتكم ضده بأداء قيمة غرامات التأخير المتفق عليها، والتعويض عن فوائد التأخير وفقاً للملحق التجاري الملحق."
                  />
                </div>
                {/* Specific Relief Sought */}
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">
                    الطلبات الختامية المحددة لهيئة التحكيم *
                  </label>
                  <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        1
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface">
                        إلزام المحتكم ضده بسداد أصل مستحقات غرامات التأخير
                        التعاقدية البالغة 14,250,000 ريال سعودي.
                      </span>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        2
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface">
                        إلزام المحتكم ضده بكامل أتعاب المحاماة ومصاريف ونفقات
                        التحكيم الإدارية المقررة لدى المركز.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Arbitration Clause & Document Repository */}
              <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-primary-container text-gold-light flex items-center justify-center font-bold text-xs">
                    د
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      وثيقة شرط التحكيم والمستندات المؤيدة للدعوى
                    </h3>
                    <p className="font-body-sm text-body-sm text-outline">
                      إلزامية إرفاق النسخة الموقعة من العقد المتضمنة شرط التحكيم
                      لاختصاص المركز
                    </p>
                  </div>
                </div>
                {/* Clause Validation Indicator */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md bg-surface-parchment p-space-md rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline">
                      صيغة شرط التحكيم:
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      بند تحكيمي مؤسسي صريح
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline">
                      مقر التحكيم القانوني (Seat):
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      الرياض، المملكة العربية السعودية
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline">
                      لغة إجراءات التحكيم:
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      اللغة العربية (مع الترجمة المعتمدة)
                    </span>
                  </div>
                </div>
                {/* Drag & Drop PDF Dossier Area */}
                <div className="bg-surface-container-low rounded-xl p-space-xl flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container transition-all">
                  <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center text-gold-deep shadow-md group-hover:scale-105 transition-transform mb-space-sm">
                    <span className="material-symbols-outlined text-3xl">
                      cloud_upload
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold">
                    اسحب وأفلت مستندات الدعوى وعقد شرط التحكيم هنا
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-lg mt-1 mb-space-md">
                    يُقبل ملف بصيغة PDF المشفرة (الحد الأقصى لكل ملف 50
                    ميجابايت). يُرجى دمج الملاحق الفنية في ملف موحد مفهرس
                    رقمياً.
                  </p>
                  <button
                    className="px-space-lg py-space-sm bg-primary text-surface-ivory rounded-lg font-label-lg text-label-lg hover:bg-emerald-deepest shadow-sm transition-all flex items-center gap-space-xs"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-gold-light text-base">
                      folder_open
                    </span>
                    <span className="">استعراض الملفات من الجهاز</span>
                  </button>
                </div>
                {/* Uploaded Files List */}
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-sm text-label-sm text-outline font-semibold">
                    المستندات المرفقة المؤكدة (2 ملفات جاهزة للتدقيق القضائي):
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    {/* File 1 */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-gold-deep text-2xl">
                          picture_as_pdf
                        </span>
                        <div className="flex flex-col">
                          <span className="font-title-md text-title-md text-primary font-bold text-sm truncate max-w-[220px]">
                            عقد_المقاولة_وشرط_التحكيم_الموقع.pdf
                          </span>
                          <span className="font-legal-code text-legal-code text-outline">
                            8.4 ميجابايت • موثق بتوقيع رقمي
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-status-success text-lg">
                          check_circle
                        </span>
                        <button
                          className="text-error hover:opacity-80 p-1"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-base">
                            delete
                          </span>
                        </button>
                      </div>
                    </div>
                    {/* File 2 */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-gold-deep text-2xl">
                          picture_as_pdf
                        </span>
                        <div className="flex flex-col">
                          <span className="font-title-md text-title-md text-primary font-bold text-sm truncate max-w-[220px]">
                            حافظة_المستندات_وإشعارات_الإخلال.pdf
                          </span>
                          <span className="font-legal-code text-legal-code text-outline">
                            14.2 ميجابايت • 48 صفحة مفهرسة
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-status-success text-lg">
                          check_circle
                        </span>
                        <button
                          className="text-error hover:opacity-80 p-1"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-base">
                            delete
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Legal Attestation & Convention Compliance */}
              <div className="bg-surface-parchment p-space-xl rounded-xl shadow-sm flex flex-col gap-space-md relative">
                <div className="flex items-start gap-space-md">
                  <div className="pt-0.5">
                    <input
                      defaultChecked
                      className="w-5 h-5 accent-primary rounded cursor-pointer"
                      id="legal_oath"
                      type="checkbox"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="font-title-md text-title-md text-primary font-bold cursor-pointer"
                      htmlFor="legal_oath"
                    >
                      الإقرار النظامي بصحة البيانات والالتزام باتفاقية نيويورك
                      1958 ولائحة التحكيم
                    </label>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      أقر بصفتي النظامية المعتمدة بصحة واكتمال جميع البيانات
                      والوثائق المرفوعة أعلاه ومسؤوليتي القانونية عنها، وأفوض
                      الأمانة العامة للمكتب الدولي للتحكيم وتسوية المنازعات في
                      قيد الدعوى وإشعار الطرف المدعى عليه وفق قواعد التحكيم
                      المؤسسي الدولية. كما أقر بأن الحكم الصادر سيكون نهائياً
                      وملزماً لكلا الطرفين ويتمتع بالنفاذ الجبري بموجب اتفاقية
                      الأمم المتحدة للاعتراف بقرارات التحكيم الأجنبية وتنفيذها
                      (نيويورك 1958).
                    </p>
                  </div>
                </div>
              </div>

              {/* Sticky Action Dock */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-space-md sticky bottom-4 z-40">
                <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center gap-space-xs text-status-success font-semibold">
                    <span className="material-symbols-outlined text-base">
                      cloud_done
                    </span>
                    <span className="">تم حفظ المسودة تلقائياً (14:32:08)</span>
                  </div>
                  <span className="hidden md:inline text-outline">•</span>
                  <span className="font-legal-code text-legal-code text-outline">
                    جلسة مشفرة وآمنة وفق بروتوكولات TLS 1.3
                  </span>
                </div>
                <div className="flex items-center gap-space-sm w-full md:w-auto">
                  {/* Save Draft Button */}
                  <button
                    onClick={() =>
                      alert("تم حفظ مسودة طلب التحكيم بنجاح برقم ARB-2025-0841-DRAFT")
                    }
                    className="w-1/2 md:w-auto px-space-lg py-space-sm bg-surface-container-low text-primary rounded-lg font-label-lg text-label-lg hover:bg-surface-container transition-all flex items-center justify-center gap-space-xs"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-base">
                      save
                    </span>
                    <span className="">حفظ كمسودة والرجوع لاحقاً</span>
                  </button>
                  {/* Primary Submit Button */}
                  <button
                    className="w-1/2 md:w-auto px-space-xl py-space-sm bg-primary text-surface-ivory rounded-lg font-label-lg text-label-lg hover:bg-emerald-deepest shadow-md transition-all flex items-center justify-center gap-space-sm group"
                    type="submit"
                  >
                    <span className="text-gold-light font-bold">
                      متابعة للخطوة التالية: احتساب الرسوم والإيداع
                    </span>
                    <span className="material-symbols-outlined text-gold-light text-base group-hover:-translate-x-1 transition-transform">
                      arrow_back
                    </span>
                  </button>
                </div>
              </div>
            </form>
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

