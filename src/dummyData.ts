import { CategoryEntity } from "./commons/domain/entities/CategoryEntity";
import { ChapterClassEntity } from "./commons/domain/entities/ChapterClassEntity";
import { ChapterEntity } from "./commons/domain/entities/ChapterEntity";
import { InterventionTypeEntity } from "./commons/domain/entities/InterventionTypeEntity";
import { NotebookImageEntity } from "./commons/domain/entities/NotebookImageEntity";
import { QuestionEntity } from "./commons/domain/entities/QuestionEntity";
import { QuestionStepEntity } from "./commons/domain/entities/QuestionStepEntity";

export const chapters: ChapterEntity[] = [
  new ChapterEntity(
    "chap1",
    "math",
    "grade8",
    "cbse",
    "Rational numbers",
    "19 May - 21 May, 2024",
    14,
    2
  ),
  new ChapterEntity(
    "chap2",
    "math",
    "grade8",
    "cbse",
    "Numeral system",
    "23 May - 28 May, 2024",
    7,
    4
  ),
  new ChapterEntity(
    "chap3",
    "math",
    "grade8",
    "cbse",
    "Quadrilateral",
    "1 June - 6 June, 2024",
    6,
    3
  ),
  new ChapterEntity(
    "chap4",
    "math",
    "grade8",
    "cbse",
    "Circle",
    "7 June - 12 June, 2024",
    8,
    12
  ),
  new ChapterEntity(
    "chap5",
    "math",
    "grade8",
    "cbse",
    "Algebra",
    "14 June - 19 June, 2024",
    10,
    5
  ),
];

export const chapterClasses: ChapterClassEntity[] = [
  // Rational Numbers (Chapter 1)
  new ChapterClassEntity(
    "class1_1",
    "chap1",
    "math",
    "grade8",
    "cbse",
    "student1",
    "19 May, 2024",
    "TEACH_CLASS",
    "Present",
    4,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 1, name: "Basic Operations", completed: 8, total: 10 },
        { sheetId: 2, name: "Word Problems", completed: 5, total: 8 },
      ],
    }
  ),
  new ChapterClassEntity(
    "class1_2",
    "chap1",
    "math",
    "grade8",
    "cbse",
    "student1",
    "20 May, 2024",
    "TEACH_CLASS",
    "Present",
    4,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 3, name: "Properties", completed: 12, total: 15 },
        { sheetId: 4, name: "Applications", completed: 7, total: 10 },
      ],
    }
  ),
  new ChapterClassEntity(
    "class1_3",
    "chap1",
    "math",
    "grade8",
    "cbse",
    "student1",
    "21 May, 2024",
    "EVALUATION_CLASS",
    "Present",
    5,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 5, name: "Final Assessment", completed: 18, total: 20 },
      ],
    }
  ),

  // Numeral System (Chapter 2)
  new ChapterClassEntity(
    "class2_1",
    "chap2",
    "math",
    "grade8",
    "cbse",
    "student1",
    "23 May, 2024",
    "TEACH_CLASS",
    "Present",
    4,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 6, name: "Number Systems Intro", completed: 9, total: 10 },
        { sheetId: 7, name: "Binary Numbers", completed: 7, total: 8 },
      ],
    }
  ),
  new ChapterClassEntity(
    "class2_2",
    "chap2",
    "math",
    "grade8",
    "cbse",
    "student1",
    "25 May, 2024",
    "TEACH_CLASS",
    "Present",
    3,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 8, name: "Conversions", completed: 12, total: 15 },
        { sheetId: 9, name: "Practice Problems", completed: 6, total: 10 },
      ],
    }
  ),
  new ChapterClassEntity(
    "class2_3",
    "chap2",
    "math",
    "grade8",
    "cbse",
    "student1",
    "28 May, 2024",
    "EVALUATION_CLASS",
    "Present",
    4,
    {
      status: "SUBMITTED",
      sheets: [{ sheetId: 10, name: "Final Test", completed: 15, total: 20 }],
    }
  ),

  // Quadrilateral (Chapter 3)
  new ChapterClassEntity(
    "class3_1",
    "chap3",
    "math",
    "grade8",
    "cbse",
    "student1",
    "1 June, 2024",
    "TEACH_CLASS",
    "Present",
    4,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 11, name: "Types & Properties", completed: 7, total: 10 },
        { sheetId: 12, name: "Angles", completed: 5, total: 8 },
      ],
    }
  ),
  new ChapterClassEntity(
    "class3_2",
    "chap3",
    "math",
    "grade8",
    "cbse",
    "student1",
    "3 June, 2024",
    "TEACH_CLASS",
    "Present",
    3,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 13, name: "Area & Perimeter", completed: 12, total: 15 },
        { sheetId: 14, name: "Problem Solving", completed: 8, total: 10 },
      ],
    }
  ),
  new ChapterClassEntity(
    "class3_3",
    "chap3",
    "math",
    "grade8",
    "cbse",
    "student1",
    "6 June, 2024",
    "EVALUATION_CLASS",
    "Present",
    4,
    {
      status: "SUBMITTED",
      sheets: [{ sheetId: 15, name: "Chapter Test", completed: 16, total: 20 }],
    }
  ),

  // Circle (Chapter 4)
  new ChapterClassEntity(
    "class4_1",
    "chap4",
    "math",
    "grade8",
    "cbse",
    "student1",
    "7 June, 2024",
    "TEACH_CLASS",
    "Present",
    4,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 16, name: "Circle Basics", completed: 8, total: 10 },
        { sheetId: 17, name: "Circle Parts", completed: 7, total: 8 },
      ],
    }
  ),
  new ChapterClassEntity(
    "class4_2",
    "chap4",
    "math",
    "grade8",
    "cbse",
    "student1",
    "9 June, 2024",
    "TEACH_CLASS",
    "Present",
    3,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 18, name: "Circumference", completed: 6, total: 8 },
        { sheetId: 19, name: "Area", completed: 10, total: 15 },
      ],
    }
  ),
  new ChapterClassEntity(
    "class4_3",
    "chap4",
    "math",
    "grade8",
    "cbse",
    "student1",
    "10 June, 2024",
    "TEACH_CLASS",
    "Present",
    4,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 20, name: "Arcs & Sectors", completed: 8, total: 10 },
        { sheetId: 21, name: "Problems", completed: 7, total: 10 },
      ],
    }
  ),
  new ChapterClassEntity(
    "class4_4",
    "chap4",
    "math",
    "grade8",
    "cbse",
    "student1",
    "12 June, 2024",
    "EVALUATION_CLASS",
    "Present",
    5,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 22, name: "Final Assessment", completed: 16, total: 20 },
      ],
    }
  ),

  // Algebra (Chapter 5)
  new ChapterClassEntity(
    "class5_1",
    "chap5",
    "math",
    "grade8",
    "cbse",
    "student1",
    "14 June, 2024",
    "TEACH_CLASS",
    "Present",
    4,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 23, name: "Introduction", completed: 9, total: 10 },
        { sheetId: 24, name: "Variables", completed: 7, total: 8 },
      ],
    }
  ),
  new ChapterClassEntity(
    "class5_2",
    "chap5",
    "math",
    "grade8",
    "cbse",
    "student1",
    "15 June, 2024",
    "TEACH_CLASS",
    "Present",
    4,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 25, name: "Linear Equations", completed: 12, total: 15 },
        { sheetId: 26, name: "Solving Equations", completed: 8, total: 10 },
      ],
    }
  ),
  new ChapterClassEntity(
    "class5_3",
    "chap5",
    "math",
    "grade8",
    "cbse",
    "student1",
    "17 June, 2024",
    "TEACH_CLASS",
    "Present",
    3,
    {
      status: "SUBMITTED",
      sheets: [
        { sheetId: 27, name: "Word Problems", completed: 11, total: 15 },
        { sheetId: 28, name: "Applications", completed: 6, total: 10 },
      ],
    }
  ),
  new ChapterClassEntity(
    "class5_4",
    "chap5",
    "math",
    "grade8",
    "cbse",
    "student1",
    "19 June, 2024",
    "EVALUATION_CLASS",
    "Present",
    5,
    {
      status: "SUBMITTED",
      sheets: [{ sheetId: 29, name: "Final Test", completed: 18, total: 20 }],
    }
  ),
];

export const evaluationsData = [
  {
    id: 1,
    name: "Well understood",
    rating: 5,
    totalCategories: 11,
    categoriesCount: 5,
    interventions: ["N/A"],
    colorName: "semantic-success",
  },
  {
    id: 2,
    name: "Understood but student makes silly mistakes",
    rating: 4,
    totalCategories: 11,
    categoriesCount: 3,
    interventions: ["Practice"],
    colorName: "accent-orange",
  },
  {
    id: 3,
    name: "Requires further reinforcement",
    rating: 3,
    totalCategories: 11,
    categoriesCount: 2,
    interventions: ["Practice", "Re-explain"],
    colorName: "semantic-error",
  },
  {
    id: 4,
    name: "Categories not assessed in class",
    rating: null,
    totalCategories: 11,
    categoriesCount: 1,
    interventions: null,
    colorName: "neutral",
  },
];

export const questionCategoryData = [
  // Chapter 1 Categories
  {
    chapterId: 1,
    id: 1,
    text: "Well understood",
    categoriesCount: 5,
    totalCategoriesCount: 11,
    rating: 5,
    interventionTypes: ["N/A"],
    color: "emerald",
  },
  {
    chapterId: 1,
    id: 2,
    text: "Understood but student makes silly mistakes",
    categoriesCount: 3,
    totalCategoriesCount: 11,
    rating: 4,
    interventionTypes: ["Practice"],
    color: "yellow",
  },
  {
    chapterId: 1,
    id: 3,
    text: "Requires further reinforcement",
    categoriesCount: 2,
    totalCategoriesCount: 11,
    rating: 2,
    interventionTypes: ["Re-explain", "Practice"],
    color: "orange",
  },

  // Chapter 2 Categories
  {
    chapterId: 2,
    id: 1,
    text: "Well understood",
    categoriesCount: 7,
    totalCategoriesCount: 15,
    rating: 5,
    interventionTypes: ["N/A"],
    color: "emerald",
  },
  {
    chapterId: 2,
    id: 2,
    text: "Requires further reinforcement",
    categoriesCount: 4,
    totalCategoriesCount: 15,
    rating: 2,
    interventionTypes: ["Re-explain", "Practice"],
    color: "orange",
  },

  // Chapter 3 Categories
  {
    chapterId: 3,
    id: 1,
    text: "Well understood",
    categoriesCount: 6,
    totalCategoriesCount: 10,
    rating: 5,
    interventionTypes: ["N/A"],
    color: "emerald",
  },
  {
    chapterId: 3,
    id: 2,
    text: "Understood but student makes silly mistakes",
    categoriesCount: 2,
    totalCategoriesCount: 10,
    rating: 4,
    interventionTypes: ["Practice"],
    color: "yellow",
  },
  {
    chapterId: 3,
    id: 3,
    text: "Categories not assessed in class",
    categoriesCount: 2,
    totalCategoriesCount: 10,
    rating: 1,
    interventionTypes: ["N/A"],
    color: "red",
  },
];

export const categoryData: Record<string, CategoryEntity[]> = {
  // Categories for Rational Numbers (chap1)
  chap1: [
    new CategoryEntity(
      "cat1_1",
      "math",
      "grade8",
      "cbse",
      "Converting decimal number to fraction",
      1,
      1,
      4,
      4
    ),
    new CategoryEntity(
      "cat1_2",
      "math",
      "grade8",
      "cbse",
      "Expressing rational numbers in decimal form",
      2,
      2,
      4,
      4
    ),
    new CategoryEntity(
      "cat1_3",
      "math",
      "grade8",
      "cbse",
      "Arranging rational numbers in ascending/descending order",
      2,
      2,
      6,
      6
    ),
    new CategoryEntity(
      "cat1_4",
      "math",
      "grade8",
      "cbse",
      "Addition and subtraction of rational numbers",
      2,
      2,
      4,
      4
    ),
  ],

  // Categories for Numeral System (chap2)
  chap2: [
    new CategoryEntity(
      "cat2_1",
      "math",
      "grade8",
      "cbse",
      "Understanding number systems",
      3,
      4,
      8,
      10
    ),
    new CategoryEntity(
      "cat2_2",
      "math",
      "grade8",
      "cbse",
      "Converting between number systems",
      5,
      6,
      12,
      15
    ),
    new CategoryEntity(
      "cat2_3",
      "math",
      "grade8",
      "cbse",
      "Binary number operations",
      4,
      5,
      8,
      10
    ),
  ],

  // Categories for Quadrilateral (chap3)
  chap3: [
    new CategoryEntity(
      "cat3_1",
      "math",
      "grade8",
      "cbse",
      "Properties of quadrilaterals",
      3,
      3,
      6,
      6
    ),
    new CategoryEntity(
      "cat3_2",
      "math",
      "grade8",
      "cbse",
      "Types of quadrilaterals",
      4,
      5,
      8,
      10
    ),
    new CategoryEntity(
      "cat3_3",
      "math",
      "grade8",
      "cbse",
      "Area and perimeter calculations",
      5,
      6,
      10,
      12
    ),
    new CategoryEntity(
      "cat3_4",
      "math",
      "grade8",
      "cbse",
      "Problem solving with quadrilaterals",
      3,
      4,
      6,
      8
    ),
  ],

  // Categories for Circle (chap4)
  chap4: [
    new CategoryEntity(
      "cat4_1",
      "math",
      "grade8",
      "cbse",
      "Circle terminology and parts",
      4,
      4,
      8,
      8
    ),
    new CategoryEntity(
      "cat4_2",
      "math",
      "grade8",
      "cbse",
      "Circumference calculations",
      3,
      4,
      6,
      8
    ),
    new CategoryEntity(
      "cat4_3",
      "math",
      "grade8",
      "cbse",
      "Area of circle and sectors",
      5,
      6,
      10,
      12
    ),
    new CategoryEntity(
      "cat4_4",
      "math",
      "grade8",
      "cbse",
      "Arc length and sector area",
      4,
      5,
      8,
      10
    ),
    new CategoryEntity(
      "cat4_5",
      "math",
      "grade8",
      "cbse",
      "Applied problems with circles",
      3,
      4,
      6,
      8
    ),
  ],

  // Categories for Algebra (chap5)
  chap5: [
    new CategoryEntity(
      "cat5_1",
      "math",
      "grade8",
      "cbse",
      "Variables and expressions",
      4,
      4,
      8,
      8
    ),
    new CategoryEntity(
      "cat5_2",
      "math",
      "grade8",
      "cbse",
      "Linear equations",
      5,
      6,
      10,
      12
    ),
    new CategoryEntity(
      "cat5_3",
      "math",
      "grade8",
      "cbse",
      "Solving word problems",
      4,
      5,
      8,
      10
    ),
    new CategoryEntity(
      "cat5_4",
      "math",
      "grade8",
      "cbse",
      "Applications of linear equations",
      3,
      4,
      6,
      8
    ),
  ],
};

export const questions: QuestionEntity[] = [
  // Questions for Rational Numbers (Chapter 1)
  new QuestionEntity(
    "1",
    "1",
    "1",
    "cat1_1",
    "Convert 0.75 into a fraction and simplify.",
    [
      new QuestionStepEntity(1, "Correct", "Write 0.75 as 75/100."),
      new QuestionStepEntity(2, "Correct", "Simplify 75/100 to 3/4."),
    ],
    "Correct",
    [
      new NotebookImageEntity(
        1,
        "https://teachmint.storage.googleapis.com/public/844358933/Assignment/88f22d54-5e63-438b-adca-cd11da3bcbc7.jpg",
        "cat1_1.png"
      ),
    ],
    [new InterventionTypeEntity(1, "Practice")]
  ),
  new QuestionEntity(
    "2",
    "1",
    "1",
    "cat1_2",
    "Express 7/8 as a decimal.",
    [
      new QuestionStepEntity(1, "Correct", "Perform 7 ÷ 8."),
      new QuestionStepEntity(2, "Correct", "The result is 0.875."),
    ],
    "Correct",
    [
      new NotebookImageEntity(
        2,
        "https://teachmint.storage.googleapis.com/public/844358933/Assignment/88f22d54-5e63-438b-adca-cd11da3bcbc7.jpg",
        "twttw"
      ),
    ]
  ),
  new QuestionEntity(
    "3",
    "1",
    "1",
    "cat1_3",
    "Arrange 3/4, 2/5, and 7/10 in ascending order.",
    [
      new QuestionStepEntity(
        1,
        "Correct",
        "Convert all fractions to decimals."
      ),
      new QuestionStepEntity(
        2,
        "Correct",
        "Compare decimals: 0.4 < 0.7 < 0.75."
      ),
    ],
    "Correct",
    [],
    [new InterventionTypeEntity(2, "Re-explain")]
  ),

  // Questions for Numeral System (Chapter 2)
  new QuestionEntity(
    "4",
    "1",
    "2",
    "cat2_1",
    "Convert the binary number 1011 to decimal.",
    [
      new QuestionStepEntity(
        1,
        "Correct",
        "Write the binary number as (1×2³) + (0×2²) + (1×2¹) + (1×2⁰)."
      ),
      new QuestionStepEntity(2, "Correct", "The result is 11 in decimal."),
    ],
    "Correct",
    [
      new NotebookImageEntity(
        3,
        "https://teachmint.storage.googleapis.com/public/844358933/Assignment/88f22d54-5e63-438b-adca-cd11da3bcbc7.jpg",
        "ss"
      ),
    ],
    [new InterventionTypeEntity(1, "Practice")]
  ),
  new QuestionEntity(
    "5",
    "1",
    "2",
    "cat2_2",
    "Convert the decimal number 25 to binary.",
    [
      new QuestionStepEntity(
        1,
        "Correct",
        "Divide 25 by 2: quotient = 12, remainder = 1."
      ),
      new QuestionStepEntity(
        2,
        "Correct",
        "Continue division: quotient = 6, remainder = 0."
      ),
      new QuestionStepEntity(3, "Correct", "Write the binary number as 11001."),
    ],
    "Correct",
    [],
    []
  ),

  // Questions for Quadrilateral (Chapter 3)
  new QuestionEntity(
    "6",
    "1",
    "3",
    "cat3_1",
    "Find the area of a rectangle with length 10 cm and width 5 cm.",
    [
      new QuestionStepEntity(
        1,
        "Correct",
        "Write the formula for area: Area = Length × Width."
      ),
      new QuestionStepEntity(
        2,
        "Correct",
        "Substitute the values: 10 × 5 = 50."
      ),
    ],
    "Correct",
    [
      new NotebookImageEntity(
        4,
        "https://teachmint.storage.googleapis.com/public/844358933/Assignment/88f22d54-5e63-438b-adca-cd11da3bcbc7.jpg",
        "shhs"
      ),
    ]
  ),
  new QuestionEntity(
    "7",
    "1",
    "3",
    "cat3_2",
    "Classify the given quadrilateral as a square, rectangle, or rhombus.",
    [
      new QuestionStepEntity(1, "Incorrect", "Identify the sides."),
      new QuestionStepEntity(2, "Partial", "Identify the angles."),
    ],
    "Incorrect",
    [],
    [new InterventionTypeEntity(2, "Re-explain")]
  ),

  // Questions for Circle (Chapter 4)
  new QuestionEntity(
    "8",
    "1",
    "4",
    "cat4_1",
    "Find the circumference of a circle with radius 7 cm.",
    [
      new QuestionStepEntity(
        1,
        "Correct",
        "Write the formula for circumference: C = 2πr."
      ),
      new QuestionStepEntity(
        2,
        "Correct",
        "Substitute the value: 2 × π × 7 = 44 cm (approximately)."
      ),
    ],
    "Correct",
    [],
    []
  ),
  new QuestionEntity(
    "9",
    "1",
    "4",
    "cat4_2",
    "Calculate the area of a sector with radius 5 cm and angle 60°.",
    [
      new QuestionStepEntity(
        1,
        "Correct",
        "Write the formula for sector area: A = (θ/360) × πr²."
      ),
      new QuestionStepEntity(
        2,
        "Correct",
        "Substitute the values: (60/360) × π × 5² = 13.09 cm²."
      ),
    ],
    "Correct",
    [],
    []
  ),

  // Questions for Algebra (Chapter 5)
  new QuestionEntity(
    "10",
    "1",
    "5",
    "cat5_1",
    "Solve for x: 2x + 5 = 15",
    [
      new QuestionStepEntity(
        1,
        "Correct",
        "Subtract 5 from both sides: 2x = 10."
      ),
      new QuestionStepEntity(2, "Correct", "Divide both sides by 2: x = 5."),
    ],
    "Correct",
    [
      new NotebookImageEntity(
        5,
        "https://example.com/notebook/solve_x.jpg",
        "Solve for x: 2x + 5 = 15"
      ),
    ],
    [new InterventionTypeEntity(1, "Practice")]
  ),
  new QuestionEntity(
    "11",
    "1",
    "5",
    "cat5_2",
    "Translate 'three times a number decreased by 4' into an algebraic expression.",
    [new QuestionStepEntity(1, "Correct", "The expression is 3x - 4.")],
    "Correct",
    [],
    []
  ),
];
