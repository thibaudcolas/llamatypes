const cats = [
  {
    id: "subjects",
    title: "Subject",
    items: [
      {
        title: "Applied arts",
        id: 18,
        description:
          "Hone your craft, technique and material thinking across the fields of ceramics, glass, metalwork and jewellery.",
        slug: "applied-arts",
      },
      {
        title: "Architecture",
        id: 16,
        description:
          "Taught and research degrees in the spatial disciplines, from RIBA-validated part II architecture to urban, environmental and interior design practices.",
        slug: "architecture",
      },
      {
        title: "Business",
        id: 19,
        description:
          "Address your professional and personal development goals and gain skills in creative leadership, entrepreneurship and design innovation.",
        slug: "business",
      },
    ],
  },
  {
    id: "programme_type",
    title: "Type",
    items: [
      {
        title: "Pre-Master's",
        id: 38,
        description:
          "Our Graduate Diploma prepares you for Master\u2019s study in art and design, and develops proficiency in independent learning methods and practices.",
        slug: "pre-masters",
      },
      {
        title: "Taught Master's",
        id: 36,
        description:
          "Our MA and MRes degrees allow you to build expertise in your chosen discipline, supported by an assisted learning programme of tutorials, seminars and individual and group projects.",
        slug: "taught-masters",
      },
    ],
  },
  {
    id: "related_schools_and_research_pages",
    title: "Schools \u0026 centres",
    items: [
      {
        title: "Research centres",
        id: 43,
        description: "",
        slug: "research-centres",
      },
      {
        title: "School of Architecture",
        id: 47,
        description: "",
        slug: "school-architecture",
      },
      {
        title: "School of Design",
        id: 45,
        description: "",
        slug: "school-design",
      },
    ],
  },
];

const getResultsStatus = (
  isLoading,
  categories,
  category,
  categoryValue,
  count
) => {
  if (isLoading) {
    return "Loading…";
  }

  const activeCategory = categories.find((c) => c.id === category);
  if (activeCategory) {
    const activeItem = activeCategory.items.find(
      (i) => `${i.id}` === categoryValue
    );

    if (activeItem) {
      return `${activeCategory.title}: ${activeItem.title}`;
    }
  }

  switch (count) {
    case 0: {
      return "No results match your search";
    }
    case 1: {
      return "1 result matches your search";
    }
    default: {
      return `${count} results match your search`;
    }
  }
};
