import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import QuestionCategoryOutlet from "./core/QuestionCategory/presentation/view/QuestionCategoryOutlet";
import CategoryOutlet from "./core/Category/presentation/view/CategoryOutlet";
import HomePage from "./core/Home/presentation/view/HomePageComponent";
import PreInterventionOutlet from "./core/PreInterventionOutlet/presentation/view/PreInterventionOutlet";
import { ReportProvider } from "./commons/context/ReportContext";
import PostInterventionOutlet from "./core/PostInterventionOutlet/presentation.view/PostInterventionOutlet";
import InDepthQcOutlet from "./core/InDepthQcOutlet/presentation/view/InDepthQcOutlet";
import PostInterventionQCOutlet from "./core/PostInterventionQCOutlet/presentation/view/PostInterventionQCOutlet";
import ExamOutlet from "./core/MultipleChapterOutlet/MultipleChapterOutlet";
import ChapterDetailsOutlet from "./core/ChapterDetailsOutlet/ChapterDetailsOutlet";
import UnderstandingOutlet from "./core/UnderstandingOutlet/UnderstandingOutlet";
import RevisionOutlet from "./core/RevisionOutlet/RevisionOutlet";
// import PDF from "./assets/pdf/PDF";
// import App from "./App";

// Define all routes upfront
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ReportProvider initialPath={window.location.pathname}>
        <HomePage />
      </ReportProvider>
    ),
    children: [
      // Understanding route
      {
        path: "chapter/:chapterId/understanding",
        element: <QuestionCategoryOutlet />,
        children: [
          {
            path: "category",
            element: <CategoryOutlet />,
            children: [
              {
                path: ":categoryId",
                element: null,
              },
            ],
          },
        ],
      },
      // Intervention route
      {
        path: "chapter/:chapterId/intervention",
        element: <PreInterventionOutlet />,
        children: [
          {
            path: "details", // Default child route
            element: <PostInterventionOutlet />,
            children: [
              {
                path: "category",
                element: <PostInterventionQCOutlet />,
                children: [
                  {
                    path: ":categoryIndex/details",
                    element: <InDepthQcOutlet />,
                    children: [
                      {
                        path: "questions",
                        element: null,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      // Exam 3 Route
      {
        path: "exam/:examId",
        element: <ExamOutlet />,
        children: [
          {
            path: "details",
            element: <ChapterDetailsOutlet />,
            children: [
              {
                path: "progress",
                element: <UnderstandingOutlet />,
                children: [
                  {
                    path: "revision",
                    element: <RevisionOutlet />,
                  },
                  {
                    path: "details",
                    element: null,
                  },
                ],
              },
              {
                path: "submissionstatus",
                element: null,
              },
              {
                path: "classesnotattended",
                element: null,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <ReportProvider> */}
    <RouterProvider router={router} />
    {/* </ReportProvider> */}
  </React.StrictMode>
);
