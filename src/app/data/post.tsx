export interface Post {
    id: number;
    title: string;
    content: string;
    image: string;
  }
  
  export const posts: Post[] = [
    {
      id: 1,
      title: "Farm Highlight: The Future Is Non-mulesed",
      content: " How an Australian wool producing family successfully ended the painful practice of live lamb cutting mulesing 12.12.2024 .",
      image: "/wool.png"
      
    },
    {
      id: 2,
      title: "FOUR PAWS in Hoi An, The  Vietnam",
      content: "A 2-year journey towards a dog and cat meat-free city  16.4.2024. In 2021, FOUR PAWS embarked on a transformative journey in Hoi An, Vietnam, signing a 2-year Memorandum of Understanding (MOU) with the Hoi An People's Committee.",
      image: "/cat.png"
    },
    {
      id: 3,
      title: "Nan Bray: The Compassionate Woolgrower",
      content: "A high welfare sheep farm free from live lamb cutting helping to chart a new course for Australian woo l3.12.2024",
      image: "/Fotolia.png"
    },
    {
      id: 4,
      title: "The FOUR PAWS Guide for Gifting Kind Fashion in 2024",
      content: "You've almost made it through another year, and the festive season is just around the corner. After all that has transpired, what could be better than finally being able to prioritise some much-needed self-care, or enjoy that highly anticipated quality time with your loved ones?",
      image: "/Stock.png"
    },
    {
      id: 5,
      title: "The FOUR PAWS Guide for Gifting Kind Fashion in 2024",
      content: "This season, use our Wear It Kind Directory to help you give the gift of kind fashion.",
      image: "/unplash.png"
    },
   
    {
      id: 6,
      title: "Mastering React Hooks",
      content: "React Hooks have revolutionized the way we write React components, making it easier to reuse stateful logic across your application. They allow you to use state and other React features without writing a class, leading to more concise and readable code.",
      image: "/placeholder.svg?height=400&width=600"
    }
   
  ];