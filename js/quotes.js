const quotes = 
[
    {
        quote: "나는 내 생각의 소산이다.",
        author: "석가모니",
    },
    {
        quote: "새벽의 어둠속에서 사람들의 눈을 속인다면, 그 모든게 밝은 불빛 아래에서 다 드러나게 된다.",
        author: "조 프레이저",
    },
    {
        quote: "지금 이 순간은 절대 돌아오지 않는다.",
        author: "박승희",
    },
    {
        quote: "일기일회 - 일생에 단 한번의 기회를 만난 듯 하라.",
        author: "김성근",
    },
    {
        quote: "장미를 건네는 손에는 항상 장미향이 배어 있다.",
        author: "데일 카네기",
    },
    {
        quote: "내가 얻는 보상은 내가 제공한 가치와 완벽하게 일치한다.",
        author: "린치핀 中",
    },
    {
        quote: "나는 이제 막 씨앗을 심어놓고 왜 당장 꽃이 피지 않느냐고, 떼를 쓰고 있었다.",
        author: "장 지오노",
    },
    {
        quote: "더 이상 가지지 못하는 것에 대해 슬퍼하지 말고, 네가 가졌던 시간들을 감사해라.",
        author: "보도섀퍼",
    },
    {
        quote: "큰 일은 작은 일일 때 시작하라. 모든 큰 일은 작은 일에서부터 시작된다.",
        author: "중국속담",
    },
    {
        quote: "매일 맑다면 사막이 되겠지.",
        author: "천계영",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//console.log(quotes[parseInt(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;