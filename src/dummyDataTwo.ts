import { CategoryInterventionEntity } from "./commons/domain/entities/CategoryInterventionEntity";
import { ChapterInterventionSummaryEntity } from "./commons/domain/entities/ChapterInterventionSummaryEntity";
import { InterventionMetricsEntity } from "./commons/domain/entities/InterventionMetricsEntity ";
import { InterventionTypeEntity } from "./commons/domain/entities/InterventionTypeEntity";
import { NotebookImageEntity } from "./commons/domain/entities/NotebookImageEntity";
import { QuestionEntity } from "./commons/domain/entities/QuestionEntity";
import { QuestionStepEntity } from "./commons/domain/entities/QuestionStepEntity";
import { UnderstandingLevelEntity } from "./commons/domain/entities/UnderstandingLevelEntity";

// report two data

export const categoryInterventions: Record<
  string,
  CategoryInterventionEntity[]
> = {
  class1_1: [
    new CategoryInterventionEntity(
      "chap1",
      "Basic Operations",
      3,
      2,
      new InterventionMetricsEntity(8, 5, 15, 20),
      new InterventionMetricsEntity(8, 7, 18, 20),
      "Needs more practice with complex word problems"
    ),
    new CategoryInterventionEntity(
      "chap1",
      "Word Problems",
      2,
      3,
      new InterventionMetricsEntity(5, 2, 12, 18),
      new InterventionMetricsEntity(5, 4, 15, 18)
    ),
  ],
  class2_1: [
    new CategoryInterventionEntity(
      "chap2",
      "Number Systems Introduction",
      3,
      2,
      new InterventionMetricsEntity(6, 3, 12, 15),
      new InterventionMetricsEntity(6, 5, 14, 15),
      "Better understanding of number system basics"
    ),
    new CategoryInterventionEntity(
      "chap2",
      "Binary Numbers",
      2,
      3,
      new InterventionMetricsEntity(8, 4, 16, 22),
      new InterventionMetricsEntity(8, 6, 19, 22),
      "Improving in binary conversions"
    ),
  ],
};

export const chapterInterventionSummaries: ChapterInterventionSummaryEntity[] =
  [
    // Rational Numbers (Chapter 1)
    new ChapterInterventionSummaryEntity(
      "chap1",
      6, // Total categories
      new UnderstandingLevelEntity(
        2, // well understood topics initially
        3, // understood but need practice
        1 // requires further attention
      ),
      new UnderstandingLevelEntity(
        4, // improved well understood
        1, // reduced need for practice
        1 // remaining topics needing attention
      )
    ),

    // Numeral System (Chapter 2)
    new ChapterInterventionSummaryEntity(
      "chap2",
      7,
      new UnderstandingLevelEntity(1, 4, 2),
      new UnderstandingLevelEntity(3, 3, 1)
    ),

    // Quadrilateral (Chapter 3)
    new ChapterInterventionSummaryEntity(
      "chap3",
      6,
      new UnderstandingLevelEntity(2, 2, 2),
      new UnderstandingLevelEntity(4, 1, 1)
    ),

    // Circle (Chapter 4)
    new ChapterInterventionSummaryEntity(
      "chap4",
      7,
      new UnderstandingLevelEntity(3, 2, 2),
      new UnderstandingLevelEntity(5, 1, 1)
    ),

    // Algebra (Chapter 5)
    new ChapterInterventionSummaryEntity(
      "chap5",
      6,
      new UnderstandingLevelEntity(1, 3, 2),
      new UnderstandingLevelEntity(3, 2, 1)
    ),
  ];

// Helper functions to work with the data
export const getChapterInterventionSummary = (
  chapterId: string
): ChapterInterventionSummaryEntity | undefined => {
  return chapterInterventionSummaries.find(
    (summary) => summary.chapterId === chapterId
  );
};

export const calculateImprovementPercentage = (
  summary: ChapterInterventionSummaryEntity
): number => {
  const preWellUnderstood = summary.preUnderstanding.wellUnderstood;
  const postWellUnderstood = summary.postUnderstanding.wellUnderstood;
  const totalCategories = summary.categories;

  return Math.round(
    ((postWellUnderstood - preWellUnderstood) / totalCategories) * 100
  );
};

export const getTotalTopicsByUnderstandingLevel = (
  summaries: ChapterInterventionSummaryEntity[]
): {
  pre: { well: number; needsPractice: number; needsAttention: number };
  post: { well: number; needsPractice: number; needsAttention: number };
} => {
  return summaries.reduce(
    (acc, summary) => ({
      pre: {
        well: acc.pre.well + summary.preUnderstanding.wellUnderstood,
        needsPractice:
          acc.pre.needsPractice + summary.preUnderstanding.understoodBut,
        needsAttention:
          acc.pre.needsAttention + summary.preUnderstanding.requiresFurther,
      },
      post: {
        well: acc.post.well + summary.postUnderstanding.wellUnderstood,
        needsPractice:
          acc.post.needsPractice + summary.postUnderstanding.understoodBut,
        needsAttention:
          acc.post.needsAttention + summary.postUnderstanding.requiresFurther,
      },
    }),
    {
      pre: { well: 0, needsPractice: 0, needsAttention: 0 },
      post: { well: 0, needsPractice: 0, needsAttention: 0 },
    }
  );
};

export const categoryQuestions: Record<string, QuestionEntity[]> = {
  // Questions for Chapter 1, Basic Operations
  chap1_basic_operations: [
    new QuestionEntity(
      "q1_basic_1",
      "math",
      "chap1",
      "basic_operations",
      "Solve the following: 235 + 489",
      [
        new QuestionStepEntity(1, "Correct", "Align numbers vertically"),
        new QuestionStepEntity(2, "Correct", "Add ones place: 5 + 9 = 14"),
        new QuestionStepEntity(3, "Incorrect", "Carry over 1 to tens place"),
        new QuestionStepEntity(4, "Partial", "Add tens place: 3 + 8 + 1 = 12"),
        new QuestionStepEntity(
          5,
          "Correct",
          "Add hundreds place: 2 + 4 + 1 = 7"
        ),
      ],
      "Incorrect",
      [
        new NotebookImageEntity(
          1,
          "/images/basic_ops_1.jpg",
          "Addition Solution Step 1"
        ),
      ]
    ),
    new QuestionEntity(
      "q1_basic_2",
      "math",
      "chap1",
      "basic_operations",
      "Calculate: 756 - 289",
      [
        new QuestionStepEntity(1, "Correct", "Set up vertical subtraction"),
        new QuestionStepEntity(2, "Incorrect", "Borrow from tens place"),
        new QuestionStepEntity(3, "Partial", "Subtract ones: 16 - 9 = 7"),
      ],
      "Incorrect",
      [
        new NotebookImageEntity(
          2,
          "/images/basic_ops_2.jpg",
          "Subtraction Working"
        ),
      ]
    ),
  ],

  // Questions for Chapter 1, Word Problems
  chap1_word_problems: [
    new QuestionEntity(
      "q1_word_1",
      "math",
      "chap1",
      "word_problems",
      "John has 328 marbles. He gives 145 to his friend. How many marbles does he have left?",
      [
        new QuestionStepEntity(
          1,
          "Correct",
          "Identify operation needed (subtraction)"
        ),
        new QuestionStepEntity(2, "Incorrect", "Set up equation: 328 - 145"),
        new QuestionStepEntity(3, "Partial", "Perform subtraction"),
      ],
      "Incorrect",
      [
        new NotebookImageEntity(
          3,
          "/images/word_prob_1.jpg",
          "Word Problem Solution"
        ),
      ]
    ),
  ],

  // Questions for Chapter 2, Number Systems
  chap2_number_systems: [
    new QuestionEntity(
      "q2_num_1",
      "math",
      "chap2",
      "number_systems",
      "Convert 125 to expanded form using place values",
      [
        new QuestionStepEntity(1, "Correct", "Identify place values"),
        new QuestionStepEntity(2, "Correct", "Write hundreds: 100"),
        new QuestionStepEntity(3, "Correct", "Write tens: 20"),
      ],
      "Correct",
      [
        new NotebookImageEntity(
          4,
          "/images/num_sys_1.jpg",
          "Place Value Expansion"
        ),
      ],
      [new InterventionTypeEntity(6, "Place Value Chart")]
    ),
  ],

  // Questions for Chapter 2, Binary Numbers
  chap2_binary: [
    new QuestionEntity(
      "q2_bin_1",
      "math",
      "chap2",
      "binary",
      "Convert binary number 1010 to decimal",
      [
        new QuestionStepEntity(1, "Correct", "Identify place values (8,4,2,1)"),
        new QuestionStepEntity(
          2,
          "Incorrect",
          "Multiply each digit by its place value"
        ),
        new QuestionStepEntity(3, "Partial", "Add all products"),
      ],
      "Incorrect",
      [
        new NotebookImageEntity(
          5,
          "/images/binary_1.jpg",
          "Binary Conversion Process"
        ),
      ],
      [new InterventionTypeEntity(7, "Binary Place Value")]
    ),
  ],
};

// Helper function to get questions by chapter and category
export const getQuestionsByCategory = (
  chapterId: string,
  categoryTitle: string
): QuestionEntity[] => {
  const normalizedCategoryTitle = categoryTitle
    .toLowerCase()
    .replace(/\s+/g, "_");
  const key = `${chapterId}_${normalizedCategoryTitle}`;
  return categoryQuestions[key] || [];
};

// Helper function to get questions by intervention status
export const getQuestionsByStatus = (
  questions: QuestionEntity[],
  status: "Correct" | "Incorrect"
): QuestionEntity[] => {
  return questions.filter((q) => q.status === status);
};

// Helper function to count correct steps
export const countCorrectSteps = (question: QuestionEntity): number => {
  return question.stepsRequired.filter((step) => step.status === "Correct")
    .length;
};
