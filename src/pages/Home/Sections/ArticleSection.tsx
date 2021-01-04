
import { Container } from '../../../components/If-Design-System/Container';
import { Article, ArticleList, BlogBlock } from '../../../components/If-Design-System/Card/Article';

export const ArticleSection = () => {
    return (
        <Container> 
            <BlogBlock>
                <ArticleList>
                    <Article 
                        type="default"
                        title="Den viktigste grunnen til å forsikre hunden din"
                        text="
                        Blir hunden din alvorlig syk, er det vondt å takke nei til livreddende behandling av økonomiske
                        grunner. Med hundeforsikring slipper du det."
                        image={{ src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" }}
                        link={{href: "/link/to/article"}}
                        tags={[
                            {name: "Ta vara på hund", href: "/articles/ta-vara-pa-hund"},
                            {name: "Valp", href: "/articles/valp"},
                        ]}
                        author="Alexander Vassbotn"
                        categoryName="Blog post"
                    />
                    <Article 
                        type="default"
                        title="Den viktigste grunnen til å forsikre hunden din"
                        text="
                        Blir hunden din alvorlig syk, er det vondt å takke nei til livreddende behandling av økonomiske
                        grunner. Med hundeforsikring slipper du det."
                        image={{ src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" }}
                        link={{href: "/link/to/article"}}
                        tags={[
                            {name: "Ta vara på hund", href: "/articles/ta-vara-pa-hund"},
                            {name: "Valp", href: "/articles/valp"},
                        ]}
                        author="Alexander Vassbotn"
                        categoryName="Blog post"
                    />
                    <Article 
                        type="across"
                        title="Den viktigste grunnen til å forsikre hunden din"
                        text="
                        Blir hunden din alvorlig syk, er det vondt å takke nei til livreddende behandling av økonomiske
                        grunner. Med hundeforsikring slipper du det."
                        image={{ src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" }}
                        link={{href: "/link/to/article"}}
                        tags={[
                            {name: "Ta vara på hund", href: "/articles/ta-vara-pa-hund"},
                            {name: "Valp", href: "/articles/valp"},
                        ]}
                        author="Alexander Vassbotn"
                        categoryName="Blog post"
                    />
                    <Article 
                        type="reverse"
                        title="Den viktigste grunnen til å forsikre hunden din"
                        text="
                        Blir hunden din alvorlig syk, er det vondt å takke nei til livreddende behandling av økonomiske
                        grunner. Med hundeforsikring slipper du det."
                        image={{ src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" }}
                        link={{href: "/link/to/article"}}
                        tags={[
                            {name: "Ta vara på hund", href: "/articles/ta-vara-pa-hund"},
                            {name: "Valp", href: "/articles/valp"},
                        ]}
                        author="Alexander Vassbotn"
                        categoryName="Blog post"
                    />


                </ArticleList>
            </BlogBlock>
        </Container>
    );
}

export default ArticleSection;