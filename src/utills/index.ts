export const constructSlug = (title: string) => {
    return (
        "run" +
        title
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("")
    );
};
