export interface IPost {
    _id: string;
    _createdAt: string;
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