const Items = [
    {
        id: "1",
        title: "Redmi 9 Power (Blazing Blue, 4GB RAM, 64GB Storage) - 6000mAh Battery | 48MP Quad Camera",
        price: 10999,
        image: "https://m.media-amazon.com/images/I/71hEzQGO5qL._AC_UL320_.jpg",
        rating: 4,
        link: "https://www.amazon.in/Test-Exclusive_2020_1113-Multi-3GB-Storage/dp/B089MS8XQ3/ref=sr_1_1?dchild=1&keywords=redmi+9+power&qid=1615472623&sr=8-1"

    },
    {

        id: "2",
        title: "HP 15 db1069AU 15.6-inch Laptop (3rd Gen Ryzen 3 3200U/4GB/1TB HDD/Windows 10/MS Office/Radeon Vega 3 Graphics), Jet Black",
        price: 30415,
        image: "https://images-na.ssl-images-amazon.com/images/I/71JZWpHPV%2BL._SL1500_.jpg",
        rating: 4,
        link: "https://www.amazon.in/HP-db1069AU-15-6-inch-Windows-Graphics/dp/B083RD58F6/ref=lp_22833084031_1_1"
    },
    {

        id: "3",
        title: "Samsung Galaxy M31 (Iceberg Blue, 6GB RAM, 128GB Storage)",
        price: 16499,
        image: "https://images-na.ssl-images-amazon.com/images/I/71ZsMOcpePL._SL1500_.jpg",
        rating: 5,
        link: "https://www.amazon.in/Samsung-Galaxy-Iceberg-128GB-Storage/dp/B085HZYM54/ref=sr_1_8?dchild=1&keywords=samsung+galaxy&qid=1615472812&s=electronics&sr=1-8"
    },
    {

        id: "4",
        title: "MSI Bravo 15 Ryzen 7 4800H 15.6 FHD Gaming Laptop (16GB/512GB SSD/144 Hz/Windows 10/ RX5500M,GDDR6 4GB/Black/1.86 kg), A4DDR-212IN",
        price: 84990,
        image: "https://images-na.ssl-images-amazon.com/images/I/71b46EnIzBL._SL1500_.jpg",
        rating: 4,
        link: "https://www.amazon.in/dp/B08GYH6HKN/ref=redir_mobile_desktop?_encoding=UTF8&aaxitk=9.vW71dh2XGCocCTlH1sww&hsa_cr_id=7816871090702&pd_rd_plhdr=t&pd_rd_r=7b82fb90-ddd2-4c53-acc2-9119942ddf94&pd_rd_w=MW252&pd_rd_wg=UWIJV&ref_=sbx_be_s_sparkle_lsi3d_asin_0_img"
    },
    {

        id: "5",
        title: "Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)",
        price: 15790,
        image: "https://images-na.ssl-images-amazon.com/images/I/71fEd9glTIL._SL1500_.jpg",
        rating: 5,
        link: "https://www.amazon.in/Samsung-Inches-Wondertainment-UA32T4340AKXXL-Glossy/dp/B086WZSK4F?ref_=Oct_s9_apbd_old_hd_bw_b1W1fuh_0_bb85c11b&pf_rd_r=NG4HVC5K2Z4PV6N0ZJRR&pf_rd_p=1bdc53e5-98b0-592c-ac87-c75da6ee8427&pf_rd_s=merchandised-search-10&pf_rd_t=BROWSE&pf_rd_i=1389375031"
    },
    {

        id: "6",
        title: "boAt Bassheads 152 in Ear Wired Earphones with Mic(Active Black)",
        price: 499,
        image: "https://images-na.ssl-images-amazon.com/images/I/61wO4-s%2ByYL._SL1500_.jpg",
        rating: 3,
        link: "https://www.amazon.in/BassHeads-152-ToneSecure-Braided-Earphones/dp/B07KY3FNQP/ref=lp_17434874031_1_10"
    },
    {

        id: "7",
        title: "LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)",
        price: 16999,
        image: "https://images-na.ssl-images-amazon.com/images/I/71uKCdULRgL._SL1500_.jpg",
        rating: 4,
        link: "https://www.amazon.in/LG-inches-Ready-Smart-32LM563BPTC/dp/B08DPLCM6T/ref=pd_sbs_2?pd_rd_w=Gaw1O&pf_rd_p=99c630ba-ffa4-4940-9542-3945145447d6&pf_rd_r=QDJECNZNN2SZAP0C4JWX&pd_rd_r=44947d2b-175e-450b-8001-7eb8a817c3ef&pd_rd_wg=CTAC2&pd_rd_i=B08DPLCM6T&psc=1"
    },
    {

        id: "8",
        title: "Fire-Boltt Blast 1400 Over -Ear Bluetooth Wireless Headphones with 25H Playtime, Thumping Bass, Lightweight Foldable Compact Design with Google/Siri Voice Assistance",
        price: 2999,
        image: "https://images-na.ssl-images-amazon.com/images/I/71lczMQC1bL._SL1178_.jpg",
        rating: 5,
        link: "https://www.amazon.in/dp/B0814GJNKG/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B0814GJNKG&pd_rd_w=TMKfJ&pf_rd_p=b9175453-ca9b-41ce-82bc-58f20ea9bb05&pd_rd_wg=5m8KO&pf_rd_r=T8MVDNW1MK73HTZR9EFB&pd_rd_r=591c5c1c-c117-481e-84ab-465a35dd9194&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyV09XQUhIVkNKQTlHJmVuY3J5cHRlZElkPUEwMDQ4NDQwRTNDSzRYNFhIV1o2JmVuY3J5cHRlZEFkSWQ9QTA1NTEzNzkxUEtRTTZaUE9NS05NJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
    },
    {

        id: "9",
        title: "Samsung 198 L 5 Star Inverter Direct-Cool Single Door Refrigerator (RR21T2G2WCR/HL, Camellia Purple)",
        price: 16890,
        image: "https://images-na.ssl-images-amazon.com/images/I/71VtXOqsI3L._SL1500_.jpg",
        rating: 4,
        link: "https://www.amazon.in/dp/B084ZX7XS4/ref=s9_acsd_al_bw_c2_x_3_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-6&pf_rd_r=YQV1ADYW5GCNGC81WBXG&pf_rd_t=101&pf_rd_p=1981a149-130e-4325-8044-55d733feaceb&pf_rd_i=1380365031"
    },
    {

        id: "10",
        title: "LG 10.5/7.0 Kg Inverter Wi-Fi Washing Machine (FHD1057SWS, Silver VCM, AI DD)",
        price: 62799,
        image: "https://images-na.ssl-images-amazon.com/images/I/71-TVZxPy1L._SL1500_.jpg",
        rating: 5,
        link: "https://www.amazon.in/LG-Inverter-Washing-Machine-FHD1057SWS/dp/B084HSWT32/ref=sr_1_3_sspa?dchild=1&pd_rd_r=41be671e-f1d9-4976-a485-9ffe488c55e6&pd_rd_w=B4Msy&pd_rd_wg=VSoD1&pf_rd_p=1e7b26ca-07bf-4ef9-9db1-fe458cc99c95&pf_rd_r=GQ62SXKYDTY3MAT35E45&qid=1615473446&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSEIzS0FIWENKRlM0JmVuY3J5cHRlZElkPUEwMjI5NzU4MzBKUVNZUUVOSU5XSyZlbmNyeXB0ZWRBZElkPUEwMjE0Mzg1MjQ2WEM4WjZLMzhUMCZ3aWRnZXROYW1lPXNwX2F0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
    },
    {

        id: "11",
        title: "Godrej 1.5 Ton 5 Star Inverter Split AC (Copper, Anti Bacterial Filter, 2020 Model, GIC 18HTC5-WTA, White)",
        price: 36699,
        image: "https://images-na.ssl-images-amazon.com/images/I/51aw6Y%2BJOyL._SL1000_.jpg",
        rating: 4,
        link: "https://www.amazon.in/dp/B083NYWBWK/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B083NYWBWK&pd_rd_w=TTHPc&pf_rd_p=b9175453-ca9b-41ce-82bc-58f20ea9bb05&pd_rd_wg=Cwvnh&pf_rd_r=72Y0HB1S6GNQTYZAB01M&pd_rd_r=e380fccc-96c5-487e-af46-835e4e92ddc3&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzS0tCNjVESVNDN1k1JmVuY3J5cHRlZElkPUEwNDc5NDA5MkNSMkY4MDNRMTk1SCZlbmNyeXB0ZWRBZElkPUExMDI1Njg5MlBEWFFTWTNSQ1pLUiZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
    },
    {

        id: "12",
        title: "Casa Copenhagen Ergonomic Desk Chair High Engineered Frame Durable and Adjustable Office Chair Modern Executive Chair Edition 21 with Armrests Lumbar Support - Dark Black",
        price: 6999,
        image: "https://images-na.ssl-images-amazon.com/images/I/61hm-zBxxwL._SL1116_.jpg",
        rating: 3,
        link: "https://www.amazon.in/Casa-Copenhagen-Ergonomic-Engineered-Adjustable/dp/B08WLWK4VD/ref=sr_1_7?_encoding=UTF8&dchild=1&pf_rd_i=mobile&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=dadfe156-3f7f-4288-a062-47f841f5195c&pf_rd_r=K46Y86AFQJ2043SVVYK6&pf_rd_s=merchandised-search-4&pf_rd_t=Gateway&qid=1615472477&refinements=p_36%3A400000-&s=home-furnishings&sr=1-7"
    },
]



export default Items;
    
    
        


    
