export interface IPost {
    _id: string;
    publishedAt: string;
    title: string;
    author: {
        name: string;
        description: string;
        image: string;
    };
    description: string;
    mainImage: {
        asset: {
            url: string;
        }
    };
    slug: {
        current: string;
    };
    body: [object];
}

export interface ITeamMember {
    fullName: string;
    position: string;
    url: string;
}

export interface IReview {
    fullName: string;
    stars: 0 | 1 | 2 | 3 | 4 | 5;
    url: string;
    review: string;
}