export interface Property {
  id: string;
  slug: string;
  title: string;
  price: number;
  priceFormatted: string;
  location: string;
  address: string;
  beds: number;
  baths: number;
  area: string;
  lotSize?: string;
  builtYear?: string;
  typology: string;
  purpose: "Buy" | "Rent";
  tag: string;
  image: string;
  description?: string;
  subImages?: { title: string; url: string }[];
}

export const properties: Property[] = [
  {
    id: "EST-94021",
    slug: "bel-air-glass-pavilion",
    title: "The Bel-Air Glass Pavilion",
    price: 8750000,
    priceFormatted: "$8,750,000",
    location: "Bel-Air, Los Angeles",
    address: "1048 Stradella Road, Bel-Air, Los Angeles",
    beds: 5,
    baths: 7,
    area: "8,420 Sq Ft",
    lotSize: "0.85 Acres",
    builtYear: "2023",
    typology: "Modern Villa",
    purpose: "Buy",
    tag: "Featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQdjGst_e_JMNZOvbO33Yf1HXZQZ2ZxkXxHdd6S2Hg9GLJOlefAA_HjIEjg0ZpomPUyUe4SsNC-AZfNvybo2VFCQ4v-fzcf3vnocsafgg__RC7FLJ6_KJc8E7d9zINidGyX45UGVfYg2NHk0Q0xPK6BOQgLqkWd6e4N0ABY8sf4IHxw-mRK-jDDJKD2c7deEVW95q0t05exQLaMgy0hdlZ8hE71wLZ9TvFryU9mBEeHEKqB5OcMu_L",
    subImages: [
      {
        title: "Living Pavilion",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmDMeM1ZcL1YPTmj4gZi9sg8U0RkvHSeE5BodglKL4CEJs_WEqX7Cu-I8X-sFXAMQrYV50rHdayGRdiTrRP-O3_3-BrUSwaa18xl0LGK7X1DukmEtxtEc1AB8ctrm_KQ6HFbSEec7Vb9QLHmnLUOnnwqCsewPoPbTZey2a08p0wvn7ANKUNga-p1zhErVL6ZYeN42yEbFl6asQuS7bNQYbueVLxm2TsT8HAdqTGHQwci313T15fn-L",
      },
      {
        title: "Master Suite",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjdCf7LHvzD_j5azlZ7xrp3Kebv-twAnWfk7xFkx3D0KY6b6WslJeRoe9Szgz-0aslAK7K-6i0uwfcL2RVoAs2ssCPhdZHemRX07KtysQ4Sgc_llN-sJF5-zHLu_q8Mozw8OOQGCQC_UFOPyEMOpAAitTy84ZOIK1Ggd5Wzc62HuFJYHysHB16W-trmfTn5CDXThaYiTJVUTNolVO6QSSwqon_25OBCP3rbnSNk3QEHpYHalhav3HE",
      },
      {
        title: "Wine Cellar",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuIJfnIO9esmilhzjocou7ozFOmwWUYkdHiz6M8MNBtyykUwX7UivkS2wTgKzyIX03DS0KCTvsg9xXe4OaGeFHjbv8IaTCpE2T_RTNdqUVH1MeaaVCrLtYU10s1rtQa44fT6XYRsWYjvUaL_TxnVEYk1ODcuCsXmMHSPlvAsrM5LwUTDQiNYVufCojrCGM7VVqn0qXuYyNRpgLheiulOOU7mwCSIkr_Pi81-Pqk3oqxzX_9dEEypJC",
      },
      {
        title: "Sunset Terrace",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCacYucgsaNBKiRZlcc-7wzWkvoBdhxigNi0raB5bnyK5NghrzJlcJ3MUlvJEO5ujEFgpWKHBLHGhrEX0fMtlekdAylO0nKB8rYRXQQ-LCv5cpEeXC3xruR4M7pPfWzpQMWhQ4Za7pHtRnlzKY-NgURfehSK4GMG3v7YV2XdbO_muk3V-mEag_LnrVLw2aa8vvqPoCvFGc1Ylel87PARe1HHKC6X37swZ9g_wj6gzEY6yoGF0Mdq1-S",
      },
    ],
  },
  {
    id: "EST-58204",
    slug: "villa-serena-cortona",
    title: "Villa Serena Cortona",
    price: 5400000,
    priceFormatted: "$5,400,000",
    location: "Tuscany, Italy",
    address: "Località San Pietro a Cegliolo, Cortona",
    beds: 6,
    baths: 6,
    area: "6,150 Sq Ft",
    lotSize: "4.2 Acres",
    builtYear: "1892 (Restored 2022)",
    typology: "Restored Stone Villa",
    purpose: "Buy",
    tag: "Just Listed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVMj7SWkJ8n4XJ0h-UrK8Oq2XjyDEdh9OOLTnP_b_AnQCQO0XwxRBfb01pGmghfBQHarvIAzY6nc8NtfviriabBrTq2CCl6UPggB-BUuYjOwLXEEBgh1VGpWHKMtQ7-0u4YbVnY-pLI0Rv-RyzieZe8ieQQDqZDvhKkuqld8dhJb76E-sZ-7NuixC5ekTU8la_crNrPVWO_O4E_WtyuZLdUnZDwtBPUX8At6ZM7OKRDc9uhAM3dLJh",
  },
  {
    id: "EST-77142",
    slug: "the-tribeca-loft-atelier",
    title: "The Tribeca Loft Atelier",
    price: 11200000,
    priceFormatted: "$11,200,000",
    location: "New York, NY",
    address: "68 Franklin Street, Penthouse 4, Tribeca",
    beds: 4,
    baths: 4.5,
    area: "5,200 Sq Ft",
    lotSize: "N/A (Duplex PH)",
    builtYear: "1910 (Renovated 2024)",
    typology: "Urban Penthouse",
    purpose: "Buy",
    tag: "Exclusive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWduPXQSrF82lT3PEWNETKYaB6Y96E2s2Q1BSeKiQiR44BxsMGfcgi1Oq9nB75BQtLLdHKcgBAMGTbF9YcrJzkjffI4jKjzlC_DTdZPzV1-hKdAX-3joPJ1ZoNsRaHGIXjNP3d6tQp0ndFrslF-9u3QU8GP_GheyShpkx-IXwZ74ETGExYj5m9lPKATmGzp8T3kzGSYQftz6MqiGluybxGioBM4PwJ-aRxTur64mS9eE5JUUIxwCjw",
  },
  {
    id: "EST-83910",
    slug: "the-highland-ridge-estate",
    title: "The Highland Ridge Estate",
    price: 14500000,
    priceFormatted: "$14,500,000",
    location: "Aspen, CO",
    address: "410 Red Mountain Road, Aspen",
    beds: 6,
    baths: 8,
    area: "9,800 Sq Ft",
    lotSize: "1.75 Acres",
    builtYear: "2021",
    typology: "Architectural Estate",
    purpose: "Buy",
    tag: "New Listing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdXmQxV2pJzl24_eAQtGWKHGwCrJyW--YSmUBoRVPq5x9fzHauDi8S5yG6zh24vQCw7pljO5NzHO-QFnbBBeAEjRy6IBIoQF24100PlcYvl4_4IhfeNHwsCsltBqGDVyplNqfjnqW9rcffLbkQ-nrOYS3Yra4R8r2_AGvkaNx1LhPKCDzlEvyQgM8rVXY6ax2i267X-zV3DrPGqGoWVwPvv59Y9FQFY7sY-sn9xi6p7GLyWJMKcV3d",
  },
  {
    id: "EST-39148",
    slug: "casa-luminosa-modern",
    title: "Casa Luminosa Modern",
    price: 9800000,
    priceFormatted: "$9,800,000",
    location: "Miami Beach, FL",
    address: "1420 North Bay Road, Miami Beach",
    beds: 5,
    baths: 6,
    area: "7,100 Sq Ft",
    lotSize: "0.62 Acres",
    builtYear: "2024",
    typology: "Waterfront Villa",
    purpose: "Buy",
    tag: "Featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhdb1r2qyBjA8rP6KyT83sNZCZudbGCkMwt9SNoAXKkTdIO6OkVU-MTvW2id3sc_sH67BhD9gB-hUhnGg5ryXUOLsHqiZfIncIvPjuoRAhJ8ADpWyBvE3B3sVyRphAEM7LQ9dFmbeavOoKyRVWMR8sIvhzp3_TA2IYE3gNhyul6hXCzLKol_AuUGz2-oeLvhsOtpuoasCPiUP7DRf3gEOjnN0LhY8hcobjXKz4yww8PMpf-THwJXX4",
  },
  {
    id: "EST-62095",
    slug: "skyline-terrace-penthouse",
    title: "Skyline Terrace Penthouse",
    price: 13600000,
    priceFormatted: "$13,600,000",
    location: "Mayfair, London",
    address: "12 Grosvenor Square, Penthouse, London",
    beds: 3,
    baths: 4,
    area: "4,450 Sq Ft",
    lotSize: "N/A (Duplex PH)",
    builtYear: "2020",
    typology: "Historic Brownstone",
    purpose: "Buy",
    tag: "Under Offer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANa8CgoQ7IYKHk0MVflzu9sOjKQKakhNGl2vGRboUhWF665C1iNkohnr1DGr5Zcr-c5ioTOYIW0NbAB4yiqvS82BylABOqHPYHdaIzQjjSvX7h46bNbbitnWxWqLXrViTatXFp2w73W9WRL0R-w_bFZdSaS5m6e7NPJ8krMbg_ccGQUTAqlamzM1HnmmBCzDyRkth3EQ__GSZ_YI-x0FDA_LuP_YtEaCtc4I2XVo8zkiAA5wp3MXDo",
  },
];
