//This acts as a database for country list

///Libraries -->
import { IFAQs, IIDentification, IMileStone, IDividend, ILeader, IWhatWeDo, IEndeavor, IPrinciple, ITestimonial, IAboutUsLink, ICrypto, IInvestor } from "@/config/interfaces";
import { companyName, yearCreated, minInvestAmount, annualPercentage, lockInPeriod, formatCryptos } from "@/config/utils";

//Commencing code
export const countryList: Array<string> = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'The Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo, Democratic Republic of the',
    'Congo, Republic of the',
    'Costa Rica',
    'Côte d’Ivoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor-Leste)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'The Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia, Federated States of',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar (Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Sudan, South',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

///This contains all the accepted cryptos
export const cryptos: Array<ICrypto> = [
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1q7ofG55fewf7t9U7GHDOS7tb6BI-UPIc",
            width: 1200,
            height: 250
        },
        name: "Bitcoin",
        symbol: "BTC",
        address: "bc1q8jen2rsqqag4aa4yj9pj52exqpg0k2hkfsytc0"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1bSMK4j731olVIzKzVt8Mu2jG0nC5DvaZ",
            width: 2500,
            height: 627
        },
        name: "Ethereum",
        symbol: "ETH",
        address: "0x72EfCd9dbde6BF2a70D2f72a1D714f80ddB02da6"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=12nmnIda62j0XR6cXF3cI7nanTksBmRY6",
            width: 601,
            height: 315
        },
        name: "Binance Coin",
        symbol: "BNB",
        address: "0x72EfCd9dbde6BF2a70D2f72a1D714f80ddB02da6"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=14q7J1IHerxFRLQXq_OTmD4FS3hUG0Gw8",
            width: 891,
            height: 410
        },
        name: "Binance USD",
        symbol: "BUSD",
        address: "0x72EfCd9dbde6BF2a70D2f72a1D714f80ddB02da6"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1AEuTaCKuVI2uZYSH9hj_QVDx0mI8erlW",
            width: 300,
            height: 99
        },
        name: "Dai (ERC20)",
        symbol: "DAI",
        address: "0x72EfCd9dbde6BF2a70D2f72a1D714f80ddB02da6"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=123Vxgmdbe4lkY9JEx5WhdhdvXLoPvzmQ",
            width: 2501,
            height: 705
        },
        name: "Litecoin",
        symbol: "LTC",
        address: "ltc1qn9js2dylx0ct2fvkjyhvjsp9c2j26k4d93d36l"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1P9r3WnNlXOjX9HKpQoYnrxVfFyvEQ0pE",
            width: 2560,
            height: 817
        },
        name: "Tether USD (ERC20)",
        symbol: "USDT",
        address: "0x72EfCd9dbde6BF2a70D2f72a1D714f80ddB02da6"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=15oT3khX6oUzBWIVloLHtTh_w2ewDAhI-",
            width: 1280,
            height: 368
        },
        name: "Ripple",
        symbol: "XRP",
        address: "rfE56ACu8ynn9sE648RpW9dSpwJChKTktE"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1NAerk1XsZXAa6C-EZn-6kqN3xeg1-ap5",
            width: 2000,
            height: 2000
        },
        // image: {
        //     src: usd.src,
        //     width: usd.width,
        //     height: usd.height
        // },
        name: "USD Coin (ERC20)",
        symbol: "USDC",
        address: "0x72EfCd9dbde6BF2a70D2f72a1D714f80ddB02da6"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1G13czcgU_-_pMD2TA0twqzLgBitDqgMY",
            width: 2560,
            height: 903
        },
        name: "Polygon Matic",
        symbol: "Matic",
        address: "0x72EfCd9dbde6BF2a70D2f72a1D714f80ddB02da6"
    }
]

///This holds all the faqs
export const faqs: Array<IFAQs> = [
    { 
        question: "What is Tokenized Mutual Funds?", 
        answer: "Tokenized mutual funds refer to traditional mutual funds that are converted into digital tokens on a blockchain. Each token represents a share in the mutual fund. By tokenizing these funds, investors can buy, sell and trade shares using cryptocurrencies and blockchain technology. This innovation provides greater accessibility, transparency and liquidity for investors, making the process of investing in mutual funds more efficient and secure in the digital age."
    },
    { 
        question: "What is a Cryptocurrency?", 
        answer: "Cryptocurrency is a digital currency that uses cryptography for secure, decentralized transactions. Operating on blockchain technology, it ensures transparency, limited supply and global accessibility. They're used for various purposes in the digital economy, from online transactions to powering decentralized applications."
    },
    { 
        question: `What is ${companyName} Token?`, 
        answer: `${companyName} Token is the native cryptocurrency of ${companyName}, it serves as the primary digital asset within the ${companyName} ecosystem. 1 Token equals $1 and is backed by mutual funds assets. By holding the token, investors have a share of the mutual funds and can participate in governance processes within the platform.`
    },
    { 
        question: `What cryptocurrencies do ${companyName} accept as a means of payment?`, 
        answer: `${companyName} accepts either of the following cryptcurrency as a means of payment for investing in its tokenized mutual funds; ${formatCryptos(cryptos.map((crypto) => crypto.name))}`
    },
    { 
        question: `Where can I buy cryptocurrency from in other to invest into ${companyName}?`, 
        answer: "Depending on your location you can cryptocurrency from trusted platforms like Binance, Coinbase, Luno, Blockchain.com, Kraken, etc. You can contact our support team for tailored guidance to avoid making mistakes and loosing your funds."
    },
    { 
        question: `Is there a limit to how much I can invest into ${companyName}`, 
        answer: `Yes, you can invest a minimum amount of $${minInvestAmount} into ${companyName}. However, there's no maximum limit on the amount you can invest into ${companyName}.`
    },
    { 
        question: "What type of ID is needed for verification?", 
        answer: "The type of ID we accept for verification varies depending on the type of investor. For Individual investors we accept government-issued National ID, Driver's License or International Passport. For Institutional investors we accept government-issued Business License or Registration Certificate"
    },
    { 
        question: `What countries do ${companyName} operate in?`, 
        answer: "We are truly global and operate in all countries"
    },
    { 
        question: "How long does it take for my account to get verified?", 
        answer: "We typically process verification request within a few minutes to a few hours. However, during periods of high demand or if additional verification is required, the process might take longer. Be rest assured that you would be verified within 48hours of providing a valid ID."
    },
    { 
        question: "How long does it take for my payment to reflect in my account?", 
        answer: `Cryptocurrency payments typically reflect in your ${companyName} account after blockchain confirmations, which can take from few minutes to few hours based on network congestion and transaction fees. Be rest assured that it would reflect within 48hours if you paid it to the provided correct wallet address.`
    },
    { 
        question: "How much dividend do I get paid on my investment?", 
        answer: `Our investors earn dividends of ${annualPercentage}% on their investment annually. However, dividends are paid on a monthly basis, this means that our investors get paid dividends of ${(annualPercentage / 12).toFixed(1)}% on their investment monthly.` 
    },
    { 
        question: "Can I withdraw my dividends/referral bonus?", 
        answer: `Yes, you can. Your dividends/referral bonus are withdrawable anytime as long as you have a minimum of $10 worth of profit, this is so in other to be able to cover for any fees that would be charged by the blockchain network processing the crypto transaction.` 
    },
    { 
        question: "Can I reinvest my dividends/referral bonus?", 
        answer: `Yes, you can. ${companyName} has made the user experience really easy to be able to reinvest your dividends/referral bonus.` 
    },
    { 
        question: "Are my investment capital withdrawable?", 
        answer: `${companyName} Mutual Funds has an investment lock-in period of ${lockInPeriod}, after which your investment capital can be withdrawn. By staying committed to our well-thought-out and long-term strategy, our investors enjoy higher returns and greater financial security, making it the ultimate path to financial success.`
    },
    { 
        question: "How much is fee is charged for withdrawal?", 
        answer: `${companyName} doesn't charge any fee for withdrawing your funds.` 
    },
    { 
        question: "Do I get taxed on my earned dividends?", 
        answer: "Profits from cryptocurrency investments are generally taxable in many countries. The specific tax treatment varies based on your country's tax laws and jurisdiction, so it's crucial to understand your local laws for accurate guidance. Generally, profits from short-term investment are often taxed at a higher rate than long-term ones."
    },
    { 
        question: "How long does it take for my withdrawals to reflect in my wallet?", 
        answer: "Cryptocurrency withdrawals typically reflect in your wallet after blockchain confirmations, which can take from few minutes to few hours based on network congestion and transaction fees. Be rest assured that it would reflect within 48hours if you provide the correct wallet address."
    },
    { 
        question: "How secured is my personal data?", 
        answer: "Your privacy is our priority. We employ robust encryption and adhere to strict data protection protocols. Your personal data, including IDs, is securely stored and never shared without your consent. Rest assured, your information is safeguarded at every step."
    },
]

///Thsi holds the required ids for investor type
export const identifications: Array<IIDentification> = [
    {
        category: "Individual",
        documents: [
            "National ID",
            "Driver's License",
            "International Passport"
        ]
    },
    {
        category: "Institution",
        documents: [
            "Business License",
            "Registration Certificate"
        ]
    }
]

///These are the milestones
export const milestones: Array<IMileStone> = [
    { year: "2015:", title: "Genesis of Vision", story: "In the dawn of blockchain technology, we envisioned a world where finance transcends borders. Our founders laid the foundation, driven by the dream of democratizing investments and ushering in a new era of financial freedom for what was to become a revolutionary force in the world of decentralized finance."},
    { year: "2016:", title: "The Birth of Tokenized Mutual Funds", story: "In a breakthrough moment, we introduced the concept of tokenized mutual funds to the world. This revolutionary idea transformed traditional investment models, converting them into digital assets, making diverse portfolios accessible to all, irrespective of their financial background. Investors found a new home with us, a place where their aspirations found wings"},
    { year: "2017:", title: "Unveiling the Blockchain Revolution", story: "Amidst the blockchain frenzy, we emerged as torchbearers, exploring the uncharted territories of blockchain applications and unraveling its potential beyond cryptocurrencies. Our early experiments paved the way for innovative financial solutions, setting the stage for our future endeavors." },
    { year: "2018:", title: "Global Recognition", story: "Our innovative approach had gained global recognition. We empowered investors from diverse corners of the world, transcending geographical boundaries. Our platform became a melting pot of cultures and ambitions, creating a thriving community of global investors. The world took notice of our unique blend of technology and financial acumen." },
    { year: "2019:", title: "Redefining Investment Strategies", story: 'With a team of brilliant minds, we refined our algorithms and investment strategies. Our experts meticulously curated diverse portfolios, ensuring optimal returns for our clients while pioneering advanced risk management techniques. This move not only enhanced security but also automated processes, ensuring seamless transactions for our growing clientele.'},
    { year: "2020:", title: "Resilience Amidst Challenges", story: "Even amidst global challenges, 2020 became a testament to our resilience. We weathered storms and emerged stronger, adapting our strategies to the evolving needs of our clients. This year reinforced our commitment to safeguarding investments and providing stability in uncertain times."},
    { year: "2021:", title: 'Blockchain Innovations', story: "Embracing the global demand for decentralized finance, we continued to relentlesss innovate. We delved deeper into blockchain, exploring new horizons and pioneering innovations. Smart contracts became smarter and our technological prowess grew, setting new benchmarks in the blockchain landscape."},
    { year: "2022:", title: "Expansion and Strategic Alliances", story: "We expanded our reach and formed strategic alliances with key players in the crypto and finance sectors. These collaborations amplified our capabilities, allowing us to offer a wider array of investment options and services. Our community flourished, enriched by these partnerships."},
    { year: "2023:", title: "Beyond Boundaries", story: "In the present year, we stand at the zenith of our achievements. Our innovative products have garnered international acclaim, and our user base continues to multiply. We have not only weathered storms but have emerged stronger, shaping the future of finance with unwavering determination."}
]

///This holds all the dividends payout history
export const dividends: Array<IDividend> = [
    {
        year: 2016,
        recordDate: [
            "28-06-2016", "28-07-2016", "28-08-2016", "28-09-2016", "28-10-2016", "28-11-2016", "28-12-2016"
        ],
        payDate: [
            "03-07-2016", "03-08-2016", "03-09-2016", "03-10-2016", "03-11-2016", "03-12-2016", "03-01-2017"
        ],
        totalMutualFunds: [
            3874512, 4182130, 5210000, 7185222, 10541222, 11481210, 13841270 
        ]
    },
    {
        year: 2017,
        recordDate: [
            "28-01-2017", "28-02-2017", "28-03-2017", "28-04-2017", "28-05-2017" , "28-06-2017", "28-07-2017", "28-08-2017", "28-09-2017", "28-10-2017", "28-11-2017", "28-12-2017"
        ],
        payDate: [
            "03-02-2017", "03-03-2017", "03-04-2017", "03-05-2017", "03-06-2017", "03-07-2017", "03-08-2017", "03-09-2017", "03-10-2017", "03-11-2017", "03-12-2017", "03-01-2018"
        ],
        totalMutualFunds: [
            14854125, 17111487, 17854124, 20401541, 21471325, 25447164, 30014235, 31668457, 40210440, 43002410, 44030124, 46223876
        ]
    },
    {
        year: 2018,
        recordDate: [
            "28-01-2018", "28-02-2018", "28-03-2018", "28-04-2018", "28-05-2018" , "28-06-2018", "28-07-2018", "28-08-2018", "28-09-2018", "28-10-2018", "28-11-2018", "28-12-2018"
        ],
        payDate: [
            "03-02-2018", "03-03-2018", "03-04-2018", "03-05-2018", "03-06-2018", "03-07-2018", "03-08-2018", "03-09-2018", "03-10-2018", "03-11-2018", "03-12-2018", "03-01-2019"
        ],
        totalMutualFunds: [
            46218999, 49564855, 51220147, 53021877, 54014101, 57441225, 60112477, 62558444, 63022148, 100554853, 105741256, 112447100
        ]
    },
    {
        year: 2019,
        recordDate: [
            "28-01-2019", "28-02-2019", "28-03-2019", "28-04-2019", "28-05-2019" , "28-06-2019", "28-07-2019", "28-08-2019", "28-09-2019", "28-10-2019", "28-11-2019", "28-12-2019"
        ],
        payDate: [
            "03-02-2019", "03-03-2019", "03-04-2019", "03-05-2019", "03-06-2019", "03-07-2019", "03-08-2019", "03-09-2019", "03-10-2019", "03-11-2019", "03-12-2019", "03-01-2020"
        ],
        totalMutualFunds: [
            150441254, 180245144, 190441751, 210554741, 225410541, 230641554, 234888510, 237489512, 240665124, 250444157, 280457145, 300254124
        ]
    },
    {
        year: 2020,
        recordDate: [
            "28-01-2020", "28-02-2020", "28-03-2020", "28-04-2020", "28-05-2020" , "28-06-2020", "28-07-2020", "28-08-2020", "28-09-2020", "28-10-2020", "28-11-2020", "28-12-2020"
        ],
        payDate: [
            "03-02-2020", "03-03-2020", "03-04-2020", "03-05-2020", "03-06-2020", "03-07-2020", "03-08-2020", "03-09-2020", "03-10-2020", "03-11-2020", "03-12-2020", "03-01-2021"
        ],
        totalMutualFunds: [
            350441451, 410225412, 430851254, 460112810, 490620124, 520114231, 630124548, 710224112, 770451245, 900452124, 1245124111, 1375547822
        ]
    },
    {
        year: 2021,
        recordDate: [
            "28-01-2021", "28-02-2021", "28-03-2021", "28-04-2021", "28-05-2021" , "28-06-2021", "28-07-2021", "28-08-2021", "28-09-2021", "28-10-2021", "28-11-2021", "28-12-2021"
        ],
        payDate: [
            "03-02-2021", "03-03-2021", "03-04-2021", "03-05-2021", "03-06-2021", "03-07-2021", "03-08-2021", "03-09-2021", "03-10-2021", "03-11-2021", "03-12-2021", "03-01-2022"
        ],
        totalMutualFunds: [
            1521524188, 1755254956, 1966254117, 2544114687, 2789241541, 3144254125, 4557851452, 6411244512, 9122354785, 10541457412, 12447895632, 15447451241
        ]
    },
    {
        year: 2022,
        recordDate: [
            "28-01-2022", "28-02-2022", "28-03-2022", "28-04-2022", "28-05-2022" , "28-06-2022", "28-07-2022", "28-08-2022", "28-09-2022", "28-10-2022", "28-11-2022", "28-12-2022"
        ],
        payDate: [
            "03-02-2022", "03-03-2022", "03-04-2022", "03-05-2022", "03-06-2022", "03-07-2022", "03-08-2022", "03-09-2022", "03-10-2022", "03-11-2022", "03-12-2022", "03-01-2023"
        ],
        totalMutualFunds: [
            20115475124, 21475521684, 23741521651, 29771541541, 31001541247, 34210111471, 36410111241, 39410124100, 41220114120, 43121475121, 44512147415, 47541961254
        ]
    },
    {
        year: 2023,
        recordDate: [
            "28-01-2023", "28-02-2023", "28-03-2023", "28-04-2023", "28-05-2023" , "28-06-2023", "28-07-2023", "28-08-2023", "28-09-2023", "28-10-2023"
        ],
        payDate: [
            "03-02-2023", "03-03-2023", "03-04-2023", "03-05-2023", "03-06-2023", "03-07-2023", "03-08-2023", "03-09-2023", "03-10-2023", "03-11-2023"
        ],
        totalMutualFunds: [
            48551241547, 51001221475, 53410111241, 55100142140, 57412145124, 58114214111, 60001241245, 61751241241, 64441247457, 66471547220
        ]
    }
]

///This contains the all data for principles
export const principles: Array<IPrinciple> = [
    { title: "Customer-Centric Approach", text: "We are committed to our customers' satisfaction. Our dedicated customer support team is available around the clock, ready to assist you on your investment journey." },
    { title: "Empowering Access", text: "We believe in democratizing finance. We provide equal investment opportunities for everyone, regardless of their background or wealth." },
    { title: "Transparency and Accountablility", text: "Transparency and accountability is our foundation. We provide real-time, immutable data on fund performance and transactions, ensuring complete openness to our investors." },
    { title: "Research and Due Diligence", text: "Rigorous research and due diligence guide our investment decisions, ensuring that every opportunity presented to our investors meets the highest standards." },
    { title: "Security First", text: "Security is non-negotiable. We employ cutting-edge encryption and decentralized technologies to safeguard your investments and personal data." },
    { title: "Innovation Driven Progress", text: "We embrace innovation. Constantly exploring blockchain advancements, we strive to offer innovative financial products that adapt to the ever-changing market landscape." },
    { title: "Ethical Investment", text: "We prioritize ethical investments, avoiding industries and practices harmful to society or the environment, aligning our growth with ethical values." },
    { title: "Long-Term Vision", text: "We focus on long-term sustainable growth rather than short-term gains, fostering investments that stand the test of time." },
    { title: "Inclusive Governance", text: "We believe in inclusive governance, giving our community a voice in shaping the future of our platform through democratic decision-making processes." },
    { title: "Risk Management", text: "Prudent risk management is our mantra. We employ sophisticated risk assessment tools to mitigate potential risks, safeguarding our investors' interests." }
]

///This holds the data for testimony
export const testimonies: Array<ITestimonial> = [
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1Uvv1_ztwmuzWM8H-hpg8FgZQAYK9K4j-",
            width: 1365,
            height: 2048
        }, 
        name: "Zoe Carter", 
        profession: "Caterer", 
        testimony: "The referral bonus played a crucial role in expanding my bakery. I could invest in new equipment and hire skilled bakers. Now, my business is flourishing, serving delightful pastries to the community." 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1ym4g9dK_rFU-AAL_mxTUaDD8cHQaMqQu",
            width: 2048,
            height: 1366
        }, 
        name: "Sophie Hill", 
        profession: "Nutritionist", 
        testimony: "The customer care team's patience and knowledge were remarkable. They made my investment journey stress-free. The financial advisors' holistic approach aligned my investments with my ethical beliefs, empowering my nutritionist practice." 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1pc6TIiiEaWA5f5med_1lLhfosuFZXeGB",
            width: 1536,
            height: 2048
        }, 
        name: "Nora Davis", 
        profession: "Financial Advisor", 
        testimony: "As a financial advisor, I understand the importance of smart investments. Tokenized mutual funds offers a unique opportunity for both novice and experienced investors. My $82,000 investment has been consistently rewarding." 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1POg2_oMi4mxxM-UmGpW2boDvz6I-r_qy",
            width: 2048,
            height: 1151
        }, 
        name: "Sebastian Hill", 
        profession: "Travel Blogger", 
        testimony: "I travel a lot for my blog, and investing in tokenized mutual funds was a great way to grow my income while on the go. My initial investment of $7,500 has grown steadily, allowing me to explore more destinations" 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1HKRDjpB493XVsXWqur5Ne_oDX62pYdKB",
            width: 1366,
            height: 2048
        }, 
        name: "Omar Khan", 
        profession: "Pharmacist", 
        testimony: "Investing $64,000 in tokenized mutual funds was a strategic move for my family's financial future. The dividends have been substantial, and the referral bonus was a pleasant surprise. I highly recommend this platform." 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1ns-Ul3zOmTMp0xjsqiWnkJPOSvdB3spF",
            width: 1536,
            height: 2048
        }, 
        name: "Aiden Thompson", 
        profession: "Business Owner", 
        testimony: "The stable dividends from my investment helped me expand my business, hire more employees, and provide better services to our clients. It's been a catalyst for our growth" 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1K_IPatvHVpvZqMKaKTefJMThk5TojTk_",
            width: 1152,
            height: 2048
        }, 
        name: "Lila Wong", 
        profession: "Educator", 
        testimony: "Investing in tokenized mutual funds gave me the financial stability to pursue my passion for teaching without worrying about my family's future. It has relieved a significant burden off my shoulders." 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1To6iw6tZlapgdxgDFITfV3h0cN7G7E-K",
            width: 2048,
            height: 1365
        }, 
        name: "Noah Carter", 
        profession: "Financial Consultant", 
        testimony: "The dividends from my investment allowed me to support my clients with even better financial strategies. It's a win-win situation where I'm helping others while my money grows." 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1eiUmDRU9qpLPZHOrW4D0A44Rzc6R0v62",
            width: 2048,
            height: 1366
        }, 
        name: "Malik Mohammad", 
        profession: "Petroleum Engineer", 
        testimony: "I'm thrilled with the returns on my $1,200,000 investment in tokenized mutual funds. The dividends are consistent and the referral bonus added a nice surprise to my earnings. A fantastic investment choice!" 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1cEOao7DAIzd4G_hIBjFamcuAacTegMR3",
            width: 2048,
            height: 1368
        }, 
        name: "Grace Smith", 
        profession: "Retired", 
        testimony: "In my retirement, I wanted to invest my savings wisely. Tokenized mutual funds offered the security I was looking for. My $90,000 investment has been a reliable source of income, supporting my peaceful retirement." 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1Eq2a3qiMBlEFe7gQ5E9wP4Z0m9-Wlwp_",
            width: 2048,
            height: 1368
        }, 
        name: "Lucas Garcia", 
        profession: "Civil Engineer", 
        testimony: "I appreciate the transparency and professionalism of this platform. Investing $19,000 in tokenized mutual funds was a smart move. The dividends have been consistent and I'm considering reinvesting my earnings" 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=18meXeFdsp2wdeYgB0J16gNTWhib2BVO5",
            width: 2048,
            height: 1365
        }, 
        name: "Zara Ayad", 
        profession: "Physician", 
        testimony: "The additional income from my investments enabled me to offer free medical services to the less fortunate. It's fulfilling to provide healthcare without financial barriers." 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1C0ls7ldzC_H1-YdbQphByjF7mOUIwAEx",
            width: 2048,
            height: 1366
        }, 
        name: "Evan Price", 
        profession: "Artist", 
        testimony: "The financial stability encouraged my experimental art projects. It resulted in exhibitions, and my work is now admired by art enthusiasts globally, all thanks to my investments." 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=14zHrkJJYuSDL_9ij5YaTzsGLrRC11uNH",
            width: 2048,
            height: 1365
        }, 
        name: "Owen Foster", 
        profession: "Architect", 
        testimony: "Investment gains allowed me to design and build eco-friendly structures. It's a contribution to sustainable living and my work is now recognized in the architectural community" 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=17biBhuUvjyATykC2A4k1xpyxc_ZTQCGW",
            width: 2048,
            height: 1537
        }, 
        name: "Bryan Chua", 
        profession: "Humanitarian", 
        testimony: "Investment returns allowed me to create awareness campaigns. From social issues to environmental concerns, my initiatives are creating meaningful conversations worldwide" 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=15Eo2UtivZSMzvTn75nnSho_P79MTxmwq",
            width: 2048,
            height: 1366
        },
        name: "Pieter Johannes", 
        profession: "Freelance Writer", 
        testimony: "Aside from the dividends earned from my investment, the referral bonus was also really helpful for me and my family. It allowed us to plan a dream vacation, creating cherished memories. We are grateful for this unexpected blessing." 
    },
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1HBX2JOxjc0ADBR_0sCwNam2W2oU0uMYi",
            width: 2048,
            height: 1365
        }, 
        name: "Zixuan Wei", 
        profession: "Entrepreneur", 
        testimony: "I diversified my investment portfolio by putting $5,200,000 into tokenized mutual funds. The steady growth and the referral bonus I earned have significantly boosted my overall earnings. Thank you for this opportunity!" 
    },
]

///This holds the data for foundation data
export const endeavors: Array<IEndeavor> = [
    { 
        title: "Philanthropy Fueled by Profits", 
        text: `We firmly believe in the principle of shared prosperity. ${companyName} donates 10% of its annual profits to ${companyName} Foundation. This commitment ensures a steady flow of resources into our philanthropic initiatives, amplifying our impact and magnifying the change we bring to the world.` 
    },
    { 
        title: "Education Enrichment", 
        text: `Education is the bedrock of progress and we're dedicated to ensuring its accessibility. ${companyName} Foundation supports educational initiatives, building schools, providing scholarships and enhancing learning environments. We empower minds and nurture the next generation of leaders.` 
    },
    { 
        title: "Environmental Guardianship", 
        text: "Our foundation actively engages in reforestation projects, sustainable energy initiatives, and environmental awareness campaigns. By leveraging technology and sustainable practices, we are pioneers in the fight against climate change, ensuring a greener, healthier Earth for generations to come." 
    },
    { 
        title: "Healthcare for Humanity", 
        text: `Quality healthcare is a fundamental right. ${companyName} Foundation partners with healthcare providers, funds medical research and delivers essential supplies to underserved communities. We believe in healing not just bodies, but also the communities where hope and health intertwine.` 
    },
    { 
        title: "Empowering Communities", 
        text: `Economic empowerment lies at the core of our mission. Our Foundation fosters entrepreneurship, supports local artisans, and initiates micro-financing programs. By providing resources and mentorship, we enable communities to flourish economically and create self-sufficient societies.` 
    },
    { 
        title: "Technological Innovation", 
        text: `In the digital age, technology is a catalyst for progress. ${companyName} Foundation invests in technological innovations that address pressing global challenges. From blockchain solutions for transparent charity work to leveraging AI for healthcare diagnostics, we explore the frontiers of technology for the greater good.` 
    },
    { 
        title: "Social Equality and Inclusion", 
        text: `We advocate for a world where everyone is treated with dignity and respect. Our foundation actively promotes social equality, advocates for gender rights, and works to eradicate discrimination in all its forms. By fostering inclusivity, we are building a society where everyone has an equal opportunity to thrive.` 
    },
    { 
        title: "Crisis Response and Humanitarian Aid", 
        text: `During times of crisis, ${companyName} Foundation swiftly responds with humanitarian aid. Whether it’s providing disaster relief, offering shelter to refugees, or ensuring access to clean water in emergency situations, our foundation stands as a reliable pillar of support for those in need.` 
    }
]

///This holds the data for what the company does
export const whatWeDo: Array<IWhatWeDo> = [
    { 
        title: "Tokenized Mutual Funds", 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1Ufj769R0wPMUtxycT6JlUm8TQ_qaaTPj",
            width: 2048,
            height: 1266
        }, 
        text: `At the heart of our services lie tokenized mutual funds — a revolutionary approach to investments. We curate funds that bridge the traditional and digital worlds, offering portfolios diversified for stability and optimized for growth. Through meticulous analysis, sophisticated algorithms and strategic investments, we optimize returns while managing risks, ensuring your investments are primed for success.` 
    },
    { 
        title: "Blockchain Infrastructure", 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1qJJyYeahnOG7RsyOXjfkSlrmaT0o5uWp",
            width: 2048,
            height: 1365
        }, 
        text: `Behind the scenes, we operate on a robust and secure blockchain infrastructure. Smart contracts, audited for integrity, govern our investment protocols, providing you with a level of security that's unparalleled. Your investments are safeguarded by the immutable nature of blockchain, assuring you of the highest standards of safety.` 
    },
    { 
        title: "User-Centric Platform", 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1UUstKmFIL7HhFBcEnLRQGEH1ebdnWkss",
            width: 2048,
            height: 1367
        }, 
        text: `Our user-friendly platform is designed with your convenience in mind. Seamlessly navigate through your investment journey, monitor portfolio performance in real-time, and access comprehensive insights. We prioritize user experience, ensuring our platform empowers you with knowledge and control over your investments.` 
    },
]

///This acts the database for career offered
export const careers = [
    { 
        name: "Senior Backend Engineer" 
    },
    { 
        name: "Technical Product Manager" 
    },
    { 
        name: "Human Resource Manager" 
    },
    { 
        name: "Senior Investment Advisor" 
    }
]

///This acts as a db that holds info about the leaders of the company
export const leaders: Array<ILeader> = [
    { 
        image: {
            src: "https://drive.google.com/uc?export=download&id=1e_F2RMoYRztgqsENvawno7jN8ORBHVFr",
            width: 1624, 
            height: 1365
        }, 
        name: "Anthony Clark", 
        role: "Chief Executive Officer", 
        bio: `
        Anthony D. Clark is Chairman and Chief Executive Officer of ${companyName}. He and two other partners founded ${companyName} in ${yearCreated}, and under his leadership, the firm has grown into a global leader in investment and technology solutions. ${companyName}'s mission is to help our clients build better financial futures and the firm is trusted to manage more money than any other investment company in the world. 
        <br />
        <br />
        Prior to founding ${companyName} in ${yearCreated}, Mr. Clark was a member of the Management Committee and a Managing Director of The First Boston Corporation.
        <br />
        <br />
        He serves as a member of the Board of Trustees of New York University (NYU) and the World Economic Forum, and is Co-Chairman of the NYU Langone Medical Center Board of Trustees. In addition, he serves on the boards of the Museum of Modern Art, the Council on Foreign Relations and the International Rescue Committee. He also serves on the Advisory Board of the Tsinghua University School of Economics and Management in Beijing and on the Executive Committee of the Partnership for New York City.
        <br />
        <br />
        Mr. Fink earned an MBA from the University of California at Los Angeles (UCLA) in 2003 and a BA from UCLA in 2001.
        `, 
        bioLink: "" 
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1qlXWMT1VdKNZ4LqOSKrhbZ8ZoOxNMJTV",
            width: 2048, 
            height: 1366
        }, 
        name: "Alex Brown", 
        role: "President", 
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1ChR18Pj92AZNaW8X5cC3Ysi4QApLDo9j",
            width: 2048, 
            height: 1367
        }, 
        name: "James Smith", 
        role: "Vice Chairman", 
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=18QyQf4N2i4WFK4SXmgRXGEoRMnbDL32E",
            width: 2048, 
            height: 1362
        }, 
        name: "Joshua Williams", 
        role: "Chief Investment Officer", 
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1lFZzgIPOU62RAd-0QuoDtNR_GhGtuH52",
            width: 1699, 
            height: 1366
        }, 
        name: "Rajesh Kapoor", 
        role: "Chief Risk Officer", 
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1Sz7X-wAXm-XWXAV80L4P3A5w1QPiaDTx",
            width: 2048, 
            height: 1365
        }, 
        name: "David Turner", 
        role: "Chief Operating Officer", 
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1QtF9L7jBKBZ1gYeluOiPhjMv4TbUx1XF",
            width: 1401, 
            height: 1368
        }, 
        name: "Chloe Abigail", 
        role: "Global Head of Human Resources", 
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1StFj_YpbhtrbgYZTtcTKeXxiAVx6SB_9",
            width: 2048, 
            height: 1365
        }, 
        name: "Mia Parker", 
        role: "Chief Legal Officer", 
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1jI9mgSx_eFg3g02TnNPCl3usT1gJD3a0",
            width: 2048, 
            height: 1367
        }, 
        name: "Emma Taylor", 
        role: "Chief Financial Officer", 
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1s5k2yrAZ-MtDsr-1NwuHkdYWfszqaccF",
            width: 1772, 
            height: 1366
        }, 
        name: "Minh Nguyen", 
        role: "Chief Technology Officer", 
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1LdvosHxU58ieb3iNVmo951K3961JrsSm",
            width: 2048, 
            height: 1365
        }, 
        name: "Benjamin Hall", 
        role: "Global Head of Corporate Affairs", 
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1EjS1hBOAtxDuqO2kLWacVAHkR5Srzx4M",
            width: 2048, 
            height: 1365
        }, 
        name: "Lily Madison", 
        role: "Head of the Global Client Business", 
    }
]

///This contains all the about us links
export const aboutUsLinks: Array<IAboutUsLink> = [
    { name: "Our Company", link: "/about-us/our-company"},
    { name: "Our History", link: "/about-us/our-history"},
    { name: "Our Principles", link: "/about-us/our-principles"},
    { name: "Our Leadership", link: "/about-us/our-leadership"},
    //{ name: "Our Portfolio", link: "/about-us/our-history"},
    { name: "Our Foundation", link: "/about-us/our-foundation"},
  ]


///This contains all investors
export const investors: Array<IInvestor> = [
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1G-_EO4ke_jg7W24RqVQUeKhCVrgznG_p",
            width: 2560,
            height: 585
        },
        name: "Andreessen"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1lVu7X5uBMtbwS2YWMpCIkUopinBdB7Hy",
            width: 1024,
            height: 206
        },
        name: "Binance"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1VdgqC3Om2sLMrWXyBCcUQ2yT7Kxy4oAU",
            width: 1600,
            height: 480
        },
        name: "YCombinator"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1bSMK4j731olVIzKzVt8Mu2jG0nC5DvaZ",
            width: 2500,
            height: 627
        },
        name: "Ethereum"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1Il-yZE3k1tqSLpUOmad4MDUBh6lghBBl",
            width: 344,
            height: 114
        },
        name: "Accel"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1qNDilV0crP8C2PNOrOU678BsYiwV2Xoa",
            width: 1300,
            height: 196
        },
        name: "Eden"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=159hZyO6vBg4ORuEO7oawNRR2vb0aqvPu",
            width: 350,
            height: 130
        },
        name: "Khosla"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=10ESeieBnJWoMWMfDiLKjWweKOBDTub5M",
            width: 1985,
            height: 228
        },
        name: "Outlier"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1pQkZ_HUh8gGrjDl5ofhdof_JyHtKm1gx",
            width: 2560,
            height: 336
        },
        name: "Sequoia"
    },
    {
        image: {
            src: "https://drive.google.com/uc?export=download&id=1bI0P8lgUUQtZeyFJAy8yX5sO0DRBUjwc",
            width: 2004,
            height: 638
        },
        name: "Openspace"
    }
]