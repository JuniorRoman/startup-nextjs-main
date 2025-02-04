"use client";
import RelatedPost from "@/components/Courses/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/NewsLetters";
import Image from "next/image";

import PricingBox from "@/components/Pricing/PricingBox";
import OfferList from "@/components/Pricing/OfferList";
import { useState } from "react";
import coursesData from "@/components/Courses/coursesDataOn";

const CourseSidebarPage = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[100px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              {coursesData.map((course) => (
                <div key={course.id}>
                  <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    {course.title}
                  </h1>
                  <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                    <div className="flex flex-wrap items-center">
                      <div className="mb-5 mr-10 flex items-center">
                        <div className="mr-4">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src={course.author.image}
                              alt="author"
                              fill
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <span className="mb-1 text-base font-medium text-body-color">
                            By <span> Alina</span>
                          </span>
                        </div>
                      </div>
                      <div className="mb-5 flex items-center">
                        <p className="mr-5 flex items-center text-base font-medium text-body-color">
                          <span className="mr-3">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              className="fill-current"
                            >
                              <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                              <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                              <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                              <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                              <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                              <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                              <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                              <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                              <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                            </svg>
                          </span>
                          12 Jan 2025
                        </p>
                        <p className="mr-5 flex items-center text-base font-medium text-body-color">
                          <span className="mr-3">
                            <svg
                              width="18"
                              height="13"
                              viewBox="0 0 18 13"
                              className="fill-current"
                            >
                              <path d="M15.6375 0H1.6875C0.759375 0 0 0.759375 0 1.6875V10.6875C0 11.3062 0.309375 11.8406 0.84375 12.15C1.09687 12.2906 1.40625 12.375 1.6875 12.375C1.96875 12.375 2.25 12.2906 2.53125 12.15L5.00625 10.7156C5.11875 10.6594 5.23125 10.6312 5.34375 10.6312H15.6094C16.5375 10.6312 17.2969 9.87187 17.2969 8.94375V1.6875C17.325 0.759375 16.5656 0 15.6375 0ZM16.3406 8.94375C16.3406 9.3375 16.0312 9.64687 15.6375 9.64687H5.37187C5.09062 9.64687 4.78125 9.73125 4.52812 9.87187L2.05313 11.3063C1.82812 11.4187 1.575 11.4187 1.35 11.3063C1.125 11.1938 1.0125 10.9688 1.0125 10.7156V1.6875C1.0125 1.29375 1.32188 0.984375 1.71563 0.984375H15.6656C16.0594 0.984375 16.3687 1.29375 16.3687 1.6875V8.94375H16.3406Z" />
                              <path d="M12.2342 3.375H4.69668C4.41543 3.375 4.19043 3.6 4.19043 3.88125C4.19043 4.1625 4.41543 4.3875 4.69668 4.3875H12.2623C12.5435 4.3875 12.7685 4.1625 12.7685 3.88125C12.7685 3.6 12.5154 3.375 12.2342 3.375Z" />
                              <path d="M11.0529 6.55322H4.69668C4.41543 6.55322 4.19043 6.77822 4.19043 7.05947C4.19043 7.34072 4.41543 7.56572 4.69668 7.56572H11.0811C11.3623 7.56572 11.5873 7.34072 11.5873 7.05947C11.5873 6.77822 11.3342 6.55322 11.0529 6.55322Z" />
                            </svg>
                          </span>
                          50
                        </p>
                        <p className="flex items-center text-base font-medium text-body-color">
                          <span className="mr-3">
                            <svg
                              width="20"
                              height="12"
                              viewBox="0 0 20 12"
                              className="fill-current"
                            >
                              <path d="M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125ZM10.2559 7.09375C9.66211 7.09375 9.16211 6.59375 9.16211 6C9.16211 5.40625 9.66211 4.90625 10.2559 4.90625C10.8496 4.90625 11.3496 5.40625 11.3496 6C11.3496 6.59375 10.8496 7.09375 10.2559 7.09375Z" />
                              <path d="M19.7559 5.625C17.6934 2.375 14.1309 0.4375 10.2559 0.4375C6.38086 0.4375 2.81836 2.375 0.755859 5.625C0.630859 5.84375 0.630859 6.125 0.755859 6.34375C2.81836 9.59375 6.38086 11.5312 10.2559 11.5312C14.1309 11.5312 17.6934 9.59375 19.7559 6.34375C19.9121 6.125 19.9121 5.84375 19.7559 5.625ZM10.2559 10.4375C6.84961 10.4375 3.69336 8.78125 1.81836 5.96875C3.69336 3.1875 6.84961 1.53125 10.2559 1.53125C13.6621 1.53125 16.8184 3.1875 18.6934 5.96875C16.8184 8.78125 13.6621 10.4375 10.2559 10.4375Z" />
                            </svg>
                          </span>
                          35
                        </p>
                      </div>
                    </div>
                    <div className="mb-5">
                      <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                      >
                        Fryzjerstwo
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      Kurs farbowania włosów - Twoja droga do mistrzostwa w
                      koloryzacji!
                    </p>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-white sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      W cenie: wszystkie moduły, egzamin i certyfikat
                      elektroniczny!
                    </p>
                    <div className="mb-10 w-full overflow-hidden rounded">
                      <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                        <Image
                          src="/images/blog/blog-details-01.jpg"
                          alt="image"
                          fill
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      Nasz kurs farbowania włosów pomoże Ci opanować różnorodne
                      techniki koloryzacji włosów, od podstaw po zaawansowane
                      metody, w sposób prosty i skuteczny!
                    </p>
                    <h3 className="font-xl mb-10 text-center font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                      Kurs koloryzacji włosów online
                    </h3>
                    <h4 className="font-xl sm:text-md mb-5 font-semibold leading-tight text-black dark:text-white sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight">
                      Jakie korzyści przyniesie Ci nasz kurs online?
                    </h4>
                    <ul className="mb-10 list-inside list-disc text-body-color">
                      <li className="text-body-color">
                        <strong>
                          Zdobędziesz solidne podstawy teoretyczne:
                        </strong>{" "}
                        Nauczysz się teorii koloru, analizy kolorystycznej oraz
                        psychologii kolorów.
                      </li>
                      <li className="text-body-color">
                        <strong className="">
                          Poznasz różnorodne techniki koloryzacji:
                        </strong>{" "}
                        Od klasycznych metod, przez współczesne techniki, po
                        kreatywne i zaawansowane sposoby farbowania włosów.
                      </li>
                      <li className="text-body-color">
                        <strong className="">
                          Opanujesz praktyczne umiejętności:
                        </strong>{" "}
                        Nauczysz się, jak prawidłowo przygotować włosy do
                        koloryzacji, jakie narzędzia i produkty są niezbędne
                        oraz jak poprawiać i korygować kolor.
                      </li>
                    </ul>
                    <p className="mb-5 text-base leading-relaxed  sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      Kurs farbowania włosów obejmuje wiedzę z zakresu teorii
                      koloru, analizy kolorystycznej, technik pasemek, low
                      lights, babylights, balayage, a także umiejętności
                      nakładania koloru, dekoloryzacji, tonowania włosów, i
                      utrwalania koloru.
                    </p>
                    <p className="mb-5 text-base leading-relaxed  sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      Poznaj kreatywne techniki koloryzacji, takie jak kolory
                      fantasy, technika color melting, stemplowanie kolorem oraz
                      farbowanie z użyciem szablonów. Dowiedz się, jak farbować
                      włosy kręcone, cienkie, siwe, farbowane wcześniej oraz
                      grube i oporne na farbę
                    </p>
                    <p className="mb-5 text-base leading-relaxed  sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      Wybierz sprawdzoną wiedzę, na bieżąco aktualizowaną na
                      podstawie potrzeb kursantów i zmian w trendach
                      koloryzacji. Naucz się najnowszych technik, takich jak
                      AirTouch, Foilayage, Flamboyage, Palm Painting oraz Shadow
                      Root. Kurs farbowania włosów stanowi doskonałe
                      wprowadzenie do rozpoczęcia własnej działalności w branży
                      fryzjerskiej
                    </p>
                    <p className="mb-5 text-base leading-relaxed  sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      Po kursie będziesz mógł skutecznie farbować włosy, tworzyć
                      modne i zaawansowane koloryzacje, a także zarządzać
                      relacjami z klientami i promować swoje usługi. Dowiesz
                      się, jak prowadzić konsultacje z klientami, zarządzać
                      czasem i pracą w salonie oraz stosować zaawansowane
                      techniki marketingu i promocji.
                    </p>
                    <p className="mb-5 leading-relaxed text-body-color  sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      Kurs jest aktualny na 2025 rok
                    </p>
                    <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                      Kurs farbowania włosów zawiera:
                    </h3>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      Kurs farbowania włosów składa się z 9 modułów, każdy
                      zawierający szczegółowe wykłady oraz testy sprawdzające
                      Twoją wiedzę.
                    </p>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      Dostęp do wszystkich modułów i szczegółowy program
                      znajdziesz w zakładce Wykłady na naszej stronie.
                    </p>
                    <h4 className="font-xl sm:text-md mb-5 font-semibold leading-tight text-black dark:text-white sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight">
                      Dla kogo jest ten kurs?
                    </h4>
                    <ul className="mb-10 list-inside list-disc text-body-color">
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        Początkujący fryzjerzy, chcący zdobyć solidne podstawy
                        koloryzacji.
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        Doświadczeni styliści pragnący poszerzyć swoje
                        umiejętności i poznać najnowsze techniki.
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        Pasjonaci koloryzacji włosów chcący zdobyć profesjonalną
                        wiedzę.
                      </li>
                    </ul>
                    <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                      <p className="text-center text-base font-medium italic text-body-color">
                        Jesteśmy Instytucją Szkoleniową wpisaną do Rejestru
                        Instytucji Szkoleniowych pod numerem: 2.02/00166/2021,
                        na podstawie ustawy o promocji zatrudnienia i
                        instytucjach rynku pracy. Działalność oświatową
                        prowadzimy na zasadach określonych w przepisach ustawy
                        Prawo przedsiębiorców. Działalność ta nie stanowi
                        prowadzenia szkoły, placówki, zespołu, o którym mowa w
                        art. 182 ustawy Prawo oświatowe, lub innej formy
                        wychowania przedszkolnego.
                      </p>
                      <span className="absolute left-0 top-0 z-[-1]">
                        <svg
                          width="132"
                          height="109"
                          viewBox="0 0 132 109"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.5"
                            d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                            fill="url(#paint0_linear_111:606)"
                          />
                          <path
                            opacity="0.5"
                            d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                            fill="url(#paint1_linear_111:606)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_111:606"
                              x1="94.7523"
                              y1="82.0246"
                              x2="8.40951"
                              y2="52.0609"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" stopOpacity="0.06" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_111:606"
                              x1="90.3206"
                              y1="58.4236"
                              x2="1.16149"
                              y2="50.8365"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" stopOpacity="0.06" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute bottom-0 right-0 z-[-1]">
                        <svg
                          width="53"
                          height="30"
                          viewBox="0 0 53 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                          <mask
                            id="mask0_111:596"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="75"
                            height="75"
                          >
                            <circle
                              opacity="0.8"
                              cx="37.5"
                              cy="37.5"
                              r="37.5"
                              fill="#4A6CF7"
                            />
                          </mask>
                          <g mask="url(#mask0_111:596)">
                            <circle
                              opacity="0.8"
                              cx="37.5"
                              cy="37.5"
                              r="37.5"
                              fill="url(#paint0_radial_111:596)"
                            />
                            <g opacity="0.8" filter="url(#filter0_f_111:596)">
                              <circle
                                cx="40.8089"
                                cy="19.853"
                                r="15.4412"
                                fill="white"
                              />
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_111:596"
                              x="4.36768"
                              y="-16.5881"
                              width="72.8823"
                              height="72.8823"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="10.5"
                                result="effect1_foregroundBlur_111:596"
                              />
                            </filter>
                            <radialGradient
                              id="paint0_radial_111:596"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                            >
                              <stop stopOpacity="0.47" />
                              <stop offset="1" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <p className="mb-10 text-base font-medium leading-relaxed  sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      Dołącz do nas i przekonaj się, jak łatwo możesz stać się
                      mistrzem koloryzacji włosów!
                    </p>
                    <div className="items-center justify-between sm:flex">
                      <div className="mb-5">
                        <h4 className="mb-3 text-sm font-medium text-body-color">
                          Popular Tags :
                        </h4>
                        <div className="flex items-center">
                          <TagButton text="Koloryzacja" />
                          <TagButton text="Fryzjerstwo" />
                          <TagButton text="Rzęsy" />
                        </div>
                      </div>
                      <div className="mb-5">
                        <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                          Share this post :
                        </h5>
                        <div className="flex items-center sm:justify-end">
                          <SharePost />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Sidebar */}
            <div className="w-full px-4 lg:w-4/12">
              <div className="mb-10 mt-12 rounded-sm bg-white p-6 shadow-three dark:bg-gray-dark dark:shadow-none lg:mt-0">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold uppercase text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Cena za kurs
                </h3>
                <PricingBox packageName="Lite" price={"800"}>
                  <OfferList text="All UI Components" status="active" />
                  <OfferList
                    text="Use with Unlimited Projects"
                    status="active"
                  />
                  <OfferList text="Commercial Use" status="active" />
                  <OfferList text="Email Support" status="active" />
                  <OfferList text="Lifetime Access" status="active" />
                  <OfferList text="Free Lifetime Updates" status="active" />
                </PricingBox>
              </div>
              <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Informacje
                </h3>
                <ul className="p-8">
                  <li className="mb-2 flex items-center justify-between border-b py-2 dark:border-white dark:border-opacity-10">
                    <span className="mr-2 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="20"
                        viewBox="0 0 48 48"
                      >
                        <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 22.476562 11.978516 A 1.50015 1.50015 0 0 0 21 13.5 L 21 24.5 A 1.50015 1.50015 0 0 0 21.439453 25.560547 L 26.439453 30.560547 A 1.50015 1.50015 0 1 0 28.560547 28.439453 L 24 23.878906 L 24 13.5 A 1.50015 1.50015 0 0 0 22.476562 11.978516 z"></path>
                      </svg>
                    </span>
                    <span className="font-medium text-body-color">Moduły</span>
                    <span className="ml-auto">9</span>
                  </li>
                  <li className="mb-2 flex items-center justify-between border-b pb-2 dark:border-white dark:border-opacity-10">
                    <span className="mr-2 flex">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="18" height="18" fill="white" />
                        <path
                          d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                          stroke="#000000"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                          stroke="#000000"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-medium text-body-color">Wykłady</span>
                    <span className="ml-auto">20</span>
                  </li>
                  <li className="mb-2 flex items-center justify-between  border-b  border-opacity-10 pb-2 dark:border-white dark:border-opacity-10">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="mr-1 items-start text-body-color dark:text-body-color-dark"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                      <path d="M8 11h8"></path>
                      <path d="M8 7h6"></path>
                    </svg> */}

                    <RelatedPost title="Testy" />
                    <span className="ml-auto">10</span>
                  </li>
                  <li className="mb-2 flex items-center justify-between border-b pb-2 dark:border-white dark:border-opacity-10">
                    <RelatedPost title="Certyfikat" />
                  </li>
                  <li className="mb-2 flex items-center justify-between border-b pb-2 dark:border-white dark:border-opacity-10">
                    <RelatedPost title="Egzamin - 20 pytań" />
                  </li>
                </ul>
              </div>

              <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap px-8 py-6">
                  <TagButton text="Themes" />
                  <TagButton text="UI Kit" />
                  <TagButton text="Tailwind" />
                  <TagButton text="Startup" />
                  <TagButton text="Business" />
                </div>
              </div>

              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseSidebarPage;
