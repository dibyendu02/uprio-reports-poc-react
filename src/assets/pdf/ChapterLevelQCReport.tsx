import { Page, Text, View, Image, Document } from "@react-pdf/renderer";
import girlPicture from "@/assets/images/student-image-can-delete.png";
import star from "@/assets/images/Star.png";
import Logo from "@/assets/images/uprio-pdf-logo.png";
import vector from "@/assets/images/Vector-pdf-candelete.png";
import imagePageFive from "@/assets/images/page-5-image.png";
import waringImage from "@/assets/images/pdf-warning.png";
import checkImage from "@/assets/images/pdf-check.png";
import errorImage from "@/assets/images/pdf-error.png";

const ChapterLevelQCReport = () => {
  const data = [
    {
      classType: "Teach Class",
      date: "19 May 24",
      attendance: "Absent",
      practiceSheets: "Not Submitted",
      notebookEvaluations: "NA",
    },
    {
      classType: "Teach Class",
      date: "19 May 24",
      attendance: "Present",
      practiceSheets:
        "Submitted\nSheet 1 (10/12 attempted)\nSheet 2 (6/8 attempted)",
      notebookEvaluations: "4",
    },
    {
      classType: "Evaluation Class",
      date: "19 May 24",
      attendance: "Present",
      practiceSheets: "NA",
      notebookEvaluations: "14",
    },
  ];

  return (
    <Document>
      {/* // ============================================== this is page 1 =================================================== */}

      <Page size="A4" style={{ backgroundColor: "white" }}>
        <View style={{ padding: 40 }}>
          <Image src={Logo} style={{ height: 51, width: 92 }} />
        </View>
        <Image
          src={vector}
          style={{
            top: 0,
            right: -90,
            position: "absolute",
            width: 278,
            height: 408,
          }}
        />
        <View style={{ marginTop: 512, padding: 40 }}>
          <Text style={{ fontSize: 38, color: "#039882" }}>Maths</Text>
          <Text style={{ fontSize: 32, color: "#363744" }}>
            Chapter Level QC Report
          </Text>
        </View>
      </Page>

      {/* // ============================================== this is page 2 =================================================== */}

      <Page
        style={{
          padding: 24,
          fontSize: 10,
          fontFamily: "Helvetica",
          color: "#000",
        }}
      >
        {/* Header Section */}
        <View style={{ flexDirection: "row", gap: 24 }}>
          <Image src={girlPicture} style={{ width: 100, height: 120 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
              Rupashri Chaterjee
            </Text>
            <Text style={{ fontSize: 12, marginTop: 12 }}>
              National Public School, Yeswanthpur
            </Text>
            <Text style={{ fontSize: 12, marginTop: 12 }}>
              Grade: <Text style={{ fontWeight: "bold" }}>8th</Text>
            </Text>
            <Text style={{ fontSize: 12, marginTop: 12 }}>
              Student with Uprio from:{" "}
              <Text style={{ fontWeight: "bold" }}>9 Oct, 2024</Text>
            </Text>
            <Text style={{ fontSize: 12, marginTop: 12, fontWeight: "bold" }}>
              Area of a Trapezium & a Polygon
            </Text>
          </View>
        </View>

        {/* Class Details Section */}
        <Text
          style={{
            fontSize: 16,
            fontWeight: "medium",
            marginTop: 60,
            marginBottom: 16,
          }}
        >
          Class Details:
        </Text>
        <View>
          <View style={{ backgroundColor: "#f0f0f0", flexDirection: "row" }}>
            <Text style={{ padding: 12, flex: 1, textAlign: "left" }}>
              Class Type
            </Text>
            <Text style={{ padding: 12, flex: 1, textAlign: "left" }}>
              Date
            </Text>
            <Text style={{ padding: 12, flex: 1, textAlign: "left" }}>
              Attendance
            </Text>
            <Text style={{ padding: 12, flex: 1, textAlign: "left" }}>
              Practice Sheets
            </Text>
            <Text style={{ padding: 12, flex: 1, textAlign: "left" }}>
              Notebook Evaluations
            </Text>
          </View>
          {data.map((row, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              <Text style={{ padding: 12, flex: 1, textAlign: "left" }}>
                {row.classType}
              </Text>
              <Text style={{ padding: 12, flex: 1, textAlign: "left" }}>
                {row.date}
              </Text>
              <Text style={{ padding: 12, flex: 1, textAlign: "left" }}>
                {row.attendance}
              </Text>
              <Text style={{ padding: 12, flex: 1, textAlign: "left" }}>
                {row.practiceSheets}
              </Text>
              <Text style={{ padding: 12, flex: 1, textAlign: "left" }}>
                {row.notebookEvaluations}
              </Text>
            </View>
          ))}
        </View>

        {/* Chapter Level Understanding Section */}
        <View style={{ gap: 2, marginTop: 30 }}>
          <Text style={{ fontSize: 14, marginBottom: 4 }}>
            Chapter level understanding:
          </Text>

          {/* Well understood - 4 stars */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 16,
            }}
          >
            <View style={{ width: "30%" }}>
              <View style={{ flexDirection: "row", gap: 2, marginBottom: 2 }}>
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
              </View>
              <Text style={{ fontSize: 13, marginTop: 5 }}>
                Well understood
              </Text>
            </View>
            <View
              style={{
                width: "40%",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                padding: 12,
              }}
            >
              <Text style={{ fontSize: 12, color: "#6B7280" }}>1/8</Text>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>Categories</Text>
            </View>
            <View
              style={{
                width: "40%",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                padding: 12,
              }}
            >
              <Text style={{ fontSize: 12, color: "#6B7280" }}>NA</Text>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>
                Intervention
              </Text>
            </View>
          </View>

          {/* Understood but Student Makes Silly Mistakes - 3 stars */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 16,
            }}
          >
            <View style={{ width: "30%" }}>
              <View style={{ flexDirection: "row", gap: 2, marginBottom: 2 }}>
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
              </View>
              <Text style={{ fontSize: 13, marginTop: 5 }}>
                Understood but Student Makes Silly Mistakes
              </Text>
            </View>
            <View
              style={{
                width: "40%",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                padding: 12,
              }}
            >
              <Text style={{ fontSize: 12, color: "#6B7280" }}>0/8</Text>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>Categories</Text>
            </View>
            <View
              style={{
                width: "40%",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                padding: 12,
              }}
            >
              <Text style={{ fontSize: 12, color: "#6B7280" }}>Practice</Text>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>
                Intervention
              </Text>
            </View>
          </View>

          {/* Requires further reinforcement - 2 stars */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 16,
            }}
          >
            <View style={{ width: "30%" }}>
              <View style={{ flexDirection: "row", gap: 2, marginBottom: 2 }}>
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
              </View>
              <Text style={{ fontSize: 13, marginTop: 5 }}>
                Well understood
              </Text>
            </View>
            <View
              style={{
                width: "40%",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                padding: 12,
              }}
            >
              <Text style={{ fontSize: 12, color: "#6B7280" }}>1/8</Text>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>Categories</Text>
            </View>
            <View
              style={{
                width: "40%",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                padding: 12,
              }}
            >
              <Text style={{ fontSize: 12, color: "#6B7280" }}>NA</Text>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>
                Intervention
              </Text>
            </View>
          </View>

          {/* Categories Not Assessed in Class - no stars */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 16,
            }}
          >
            <View style={{ width: "30%" }}>
              <View style={{ flexDirection: "row", gap: 2, marginBottom: 2 }}>
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
              </View>
              <Text style={{ fontSize: 13, marginTop: 5 }}>
                Well understood
              </Text>
            </View>
            <View
              style={{
                width: "40%",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                padding: 12,
              }}
            >
              <Text style={{ fontSize: 12, color: "#6B7280" }}>1/8</Text>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>Categories</Text>
            </View>
            <View
              style={{
                width: "40%",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                padding: 12,
              }}
            >
              <Text style={{ fontSize: 12, color: "#6B7280" }}>NA</Text>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>
                Intervention
              </Text>
            </View>
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 3 =================================================== */}

      <Page size="A4" style={{ padding: 24, backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "#EDF9FF",
            borderRadius: 4,
            marginBottom: 20,
          }}
        >
          <Text style={{ padding: 12, fontSize: 14 }}>
            Aarav's QC Level Understanding (Pre-Intervention Class)
          </Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <Image
              src={star}
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
            <Image
              src={star}
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
            <Image
              src={star}
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
            <Image
              src={star}
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
          </View>
          <Text
            style={{ fontSize: 14, fontWeight: "medium", marginBottom: 24 }}
          >
            Well understood
          </Text>
          <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
            Category 8
          </Text>
          <Text
            style={{ fontSize: 12, marginBottom: 12, fontWeight: "normal" }}
          >
            Area of Polygon divided into 2 basic shapes
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 4,
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                padding: 12,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
                1/1(100%)
              </Text>
              <Text style={{ fontSize: 11, color: "#6B7280" }}>
                Questions answered correctly
              </Text>
            </View>
            <View
              style={{
                width: 1,
                backgroundColor: "#E5E7EB",
              }}
            />
            <View
              style={{
                padding: 12,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
                (4/4) 100%
              </Text>
              <Text style={{ fontSize: 11, color: "#6B7280" }}>
                Correct steps percentage
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <Image
              src={star}
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
            <Image
              src={star}
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
            <Image
              src={star}
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
            <Image
              src={star}
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
          </View>
          <Text
            style={{ fontSize: 14, fontWeight: "medium", marginBottom: 24 }}
          >
            Understood but Student Makes Silly Mistakes
          </Text>

          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 4,
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                padding: 12,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
                1/1(100%)
              </Text>
              <Text style={{ fontSize: 11, color: "#6B7280" }}>
                Questions answered correctly
              </Text>
            </View>
            <View
              style={{
                width: 1,
                backgroundColor: "#E5E7EB",
              }}
            />
            <View
              style={{
                padding: 12,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
                (4/4) 100%
              </Text>
              <Text style={{ fontSize: 11, color: "#6B7280" }}>
                Correct steps percentage
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <Image
              src={star}
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
            <Image
              src={star}
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
            <Image
              src={star}
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
            <Image
              src={star}
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
          </View>
          <Text
            style={{ fontSize: 14, fontWeight: "medium", marginBottom: 24 }}
          >
            Requires further reinforcement
          </Text>
          <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
            Category 8
          </Text>
          <Text
            style={{ fontSize: 12, marginBottom: 12, fontWeight: "normal" }}
          >
            Relationship between parallel sides are given
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 4,
              marginBottom: 24,
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                padding: 12,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
                1/1(100%)
              </Text>
              <Text style={{ fontSize: 11, color: "#6B7280" }}>
                Questions answered correctly
              </Text>
            </View>
            <View
              style={{
                width: 1,
                backgroundColor: "#E5E7EB",
              }}
            />
            <View
              style={{
                padding: 12,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
                (4/4) 100%
              </Text>
              <Text style={{ fontSize: 11, color: "#6B7280" }}>
                Correct steps percentage
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
            Category 8
          </Text>
          <Text
            style={{ fontSize: 12, marginBottom: 12, fontWeight: "normal" }}
          >
            Area of Polygon divided into 2 basic shapes
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 4,
              marginBottom: 24,
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                padding: 12,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
                1/1(100%)
              </Text>
              <Text style={{ fontSize: 11, color: "#6B7280" }}>
                Questions answered correctly
              </Text>
            </View>
            <View
              style={{
                width: 1,
                backgroundColor: "#E5E7EB",
              }}
            />
            <View
              style={{
                padding: 12,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
                (4/4) 100%
              </Text>
              <Text style={{ fontSize: 11, color: "#6B7280" }}>
                Correct steps percentage
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
            Category 8
          </Text>
          <Text
            style={{ fontSize: 12, marginBottom: 12, fontWeight: "normal" }}
          >
            Area of Polygon divided into 2 basic shapes
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 4,

              backgroundColor: "white",
            }}
          >
            <View
              style={{
                padding: 12,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
                1/1(100%)
              </Text>
              <Text style={{ fontSize: 11, color: "#6B7280" }}>
                Questions answered correctly
              </Text>
            </View>
            <View
              style={{
                width: 1,
                backgroundColor: "#E5E7EB",
              }}
            />
            <View
              style={{
                padding: 12,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
                (4/4) 100%
              </Text>
              <Text style={{ fontSize: 11, color: "#6B7280" }}>
                Correct steps percentage
              </Text>
            </View>
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 4 =================================================== */}

      <Page style={{ padding: 24 }}>
        <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
          Category 8
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 12, fontWeight: "normal" }}>
          Area of Polygon divided into 2 basic shapes
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 4,
            backgroundColor: "white",
            marginBottom: 24,
          }}
        >
          <View
            style={{
              padding: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
              1/1(100%)
            </Text>
            <Text style={{ fontSize: 11, color: "#6B7280" }}>
              Questions answered correctly
            </Text>
          </View>
          <View
            style={{
              width: 1,
              backgroundColor: "#E5E7EB",
            }}
          />
          <View
            style={{
              padding: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
              (4/4) 100%
            </Text>
            <Text style={{ fontSize: 11, color: "#6B7280" }}>
              Correct steps percentage
            </Text>
          </View>
        </View>

        {/* //  */}
        <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
          Category 8
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 12, fontWeight: "normal" }}>
          Area of Polygon divided into 2 basic shapes
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 4,
            backgroundColor: "white",
            marginBottom: 24,
          }}
        >
          <View
            style={{
              padding: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
              1/1(100%)
            </Text>
            <Text style={{ fontSize: 11, color: "#6B7280" }}>
              Questions answered correctly
            </Text>
          </View>
          <View
            style={{
              width: 1,
              backgroundColor: "#E5E7EB",
            }}
          />
          <View
            style={{
              padding: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
              (4/4) 100%
            </Text>
            <Text style={{ fontSize: 11, color: "#6B7280" }}>
              Correct steps percentage
            </Text>
          </View>
        </View>
        {/* //  */}
        <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
          Category 8
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 12, fontWeight: "normal" }}>
          Area of Polygon divided into 2 basic shapes
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 4,
            backgroundColor: "white",
            marginBottom: 24,
          }}
        >
          <View
            style={{
              padding: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
              1/1(100%)
            </Text>
            <Text style={{ fontSize: 11, color: "#6B7280" }}>
              Questions answered correctly
            </Text>
          </View>
          <View
            style={{
              width: 1,
              backgroundColor: "#E5E7EB",
            }}
          />
          <View
            style={{
              padding: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
              (4/4) 100%
            </Text>
            <Text style={{ fontSize: 11, color: "#6B7280" }}>
              Correct steps percentage
            </Text>
          </View>
        </View>
        {/* //  */}
        <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
          Category 8
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 12, fontWeight: "normal" }}>
          Area of Polygon divided into 2 basic shapes
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 4,
            backgroundColor: "white",
            marginBottom: 24,
          }}
        >
          <View
            style={{
              padding: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
              1/1(100%)
            </Text>
            <Text style={{ fontSize: 11, color: "#6B7280" }}>
              Questions answered correctly
            </Text>
          </View>
          <View
            style={{
              width: 1,
              backgroundColor: "#E5E7EB",
            }}
          />
          <View
            style={{
              padding: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
              (4/4) 100%
            </Text>
            <Text style={{ fontSize: 11, color: "#6B7280" }}>
              Correct steps percentage
            </Text>
          </View>
        </View>
        {/* //  */}
        <Text style={{ fontSize: 16, marginBottom: 24 }}>
          Categories Not Assessed in Class
        </Text>
        <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
          Category 8
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 12, fontWeight: "normal" }}>
          Area of Polygon divided into 2 basic shapes
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 4,
            backgroundColor: "white",
            marginBottom: 24,
          }}
        >
          <View
            style={{
              padding: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
              1/1(100%)
            </Text>
            <Text style={{ fontSize: 11, color: "#6B7280" }}>
              Questions answered correctly
            </Text>
          </View>
          <View
            style={{
              width: 1,
              backgroundColor: "#E5E7EB",
            }}
          />
          <View
            style={{
              padding: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
              (4/4) 100%
            </Text>
            <Text style={{ fontSize: 11, color: "#6B7280" }}>
              Correct steps percentage
            </Text>
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 5 =================================================== */}

      <Page style={{ padding: 24 }}>
        {/* //  */}
        <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
          Category 4
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 12, fontWeight: "normal" }}>
          Finding Area from 3 given sides of Right Trapezium
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 4,
            backgroundColor: "white",
            marginBottom: 24,
          }}
        >
          <View
            style={{
              padding: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
              NA
            </Text>
            <Text style={{ fontSize: 11, color: "#6B7280" }}>
              Questions answered correctly
            </Text>
          </View>
          <View
            style={{
              width: 1,
              backgroundColor: "#E5E7EB",
            }}
          />
          <View
            style={{
              padding: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}>
              NA
            </Text>
            <Text style={{ fontSize: 11, color: "#6B7280" }}>
              Correct steps percentage
            </Text>
          </View>
        </View>

        {/* //  */}
        <View
          style={{
            backgroundColor: "#E6F9F6",
            borderRadius: 4,
            marginBottom: 20,
          }}
        >
          <Text style={{ padding: 12, fontSize: 14 }}>
            In-depth Step Level Evaluation
          </Text>
        </View>

        {/* //  */}
        <Text style={{ marginTop: 16, marginBottom: 12, fontSize: 15 }}>
          Category 2: Relationship between parallel sides are given
        </Text>

        {/* //  */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            backgroundColor: "white",
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 13 }}>Question 1</Text>
            <Text style={{ color: "#EF4444", fontSize: 13 }}>Incorrect</Text>
          </View>

          <Text style={{ marginBottom: 16, lineHeight: 1.4, fontSize: 14 }}>
            A trapezium shaped garden has one of its parallel sides thrice the
            other. If the area of the garden is less than 480 m² and the
            perpendicular height between the parallel sides is 16 m, find the
            length of the longer parallel side
          </Text>

          <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 13 }}>
            Steps Required
          </Text>

          <View style={{ marginBottom: 8 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={waringImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                With the diagram, identify the 'given' and 'to find'
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={errorImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Write the parallel sides in terms of a common unit 'x'
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                alignItems: "center",
                gap: 6,
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Plug in the values in the formula to find the unknown
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={errorImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>Find the exact measure</Text>
            </View>
          </View>

          <View style={{ marginTop: 16 }}>
            <Text style={{ marginBottom: 8 }}>Notebook Images</Text>
            <Image
              src={imagePageFive}
              style={{
                width: "80%",
                height: 250,
              }}
            />
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 6 =================================================== */}

      <Page style={{ padding: 24 }}>
        {/* Category 3 Section */}
        <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
          Category 3: Finding area of trapezium from given perimeter
        </Text>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            backgroundColor: "white",
            padding: 16,
            marginBottom: 18,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 13 }}>Question 1</Text>
            <Text style={{ color: "#EF4444", fontSize: 13 }}>Incorrect</Text>
          </View>

          <Text style={{ marginBottom: 16, lineHeight: 1.4, fontSize: 14 }}>
            The non-parallel side of a trapezium is 30 cm and its height is 20
            cm. If one of its parallel sides is 35 cm with the perimeter given
            as 113 cm, find the area of the trapezium.
          </Text>

          <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 13 }}>
            Steps Required
          </Text>

          <View style={{ marginBottom: 8 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={errorImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                With the diagram, identify the 'given' and 'to find'
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Using the "given", find height
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={errorImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Plug in the values in the formula to find the unknown
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 12 }}>
            <Text style={{ marginBottom: 8, fontSize: 13 }}>
              Notebook Images
            </Text>
            <View
              style={{
                backgroundColor: "#F3F4F6",
                padding: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#6B7280", fontSize: 12 }}>
                Not available
              </Text>
            </View>
          </View>
        </View>

        {/* Category 4 Section */}
        <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
          Category 4: Finding area from 2 given sides of right trapezium and the
          diagonal
        </Text>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            backgroundColor: "white",
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 13 }}>Question 1</Text>
            <Text style={{ color: "#EF4444", fontSize: 13 }}>Incorrect</Text>
          </View>

          <Text style={{ marginBottom: 16, lineHeight: 1.4, fontSize: 14 }}>
            Find the number of lines of symmetry in the given shape.
          </Text>

          <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 13 }}>
            Steps Required
          </Text>

          <View style={{ marginBottom: 8 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={errorImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                With the diagram, identify the 'given' and 'to find'
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={errorImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Using the "given", find height
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={errorImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>Find the Area of Trapezium</Text>
            </View>
          </View>

          <View style={{ marginTop: 12 }}>
            <Text style={{ marginBottom: 8, fontSize: 13 }}>
              Notebook Images
            </Text>
            <Image
              src={imagePageFive}
              style={{
                width: "100%",
                height: 180,
              }}
            />
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 7 =================================================== */}

      <Page style={{ padding: 24 }}>
        {/* Question 2 Section */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            backgroundColor: "white",
            padding: 16,
            marginBottom: 18,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 13 }}>Question 2</Text>
            <Text style={{ color: "#EF4444", fontSize: 13 }}>Incorrect</Text>
          </View>

          <Text style={{ marginBottom: 10, lineHeight: 1.4, fontSize: 14 }}>
            In the given figure, ABCD is a trapezium in which ABIDC∠,ABC=90°,
            AB=24 cm,AC=25 cm and CD= 7cm. Find the area of the trapezium.
          </Text>

          <Text style={{ marginBottom: 6, fontWeight: "bold", fontSize: 13 }}>
            Steps Required
          </Text>

          <View style={{ marginBottom: 8 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={errorImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                With the diagram, identify the 'given' and 'to find'
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={errorImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Using the "given", find height
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={errorImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>Find the Area of Trapezium</Text>
            </View>
          </View>

          <View style={{ marginTop: 12 }}>
            <Text style={{ marginBottom: 8, fontSize: 13 }}>
              Notebook Images
            </Text>
            <View
              style={{
                backgroundColor: "#F3F4F6",
                padding: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#6B7280", fontSize: 12 }}>
                Not available
              </Text>
            </View>
          </View>
        </View>

        {/* Category 5 Section */}
        <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
          Category 5: Finding Area from 4 given sides of Isosceles Trapezium
        </Text>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            backgroundColor: "white",
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 13 }}>Question 1</Text>
            <Text style={{ color: "#EF4444", fontSize: 13 }}>Incorrect</Text>
          </View>

          <Text style={{ marginBottom: 12, lineHeight: 1.4, fontSize: 14 }}>
            The parallel sides of a trapezium are 28 cm and 14 cm. Its
            nonparallel sides are both equal, each being 25 cm. Find the area of
            the trapezium.
          </Text>

          <Text style={{ marginBottom: 6, fontWeight: "bold", fontSize: 13 }}>
            Steps Required
          </Text>

          <View style={{ marginBottom: 8 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Draw a diagram and label the given values
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Draw a parallel line to get a scalene triangle
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Find the area of the isosceles triangle using heron's formula
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={waringImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Find the height of the triangle using the formula:1/2 x base x
                height = Area
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={errorImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>Find the Area of Trapezium</Text>
            </View>
          </View>

          <View style={{ marginTop: 8 }}>
            <Text style={{ marginBottom: 4, fontSize: 13 }}>
              Notebook Images
            </Text>
            <Image
              src={imagePageFive}
              style={{
                width: "100%",
                height: 180,
              }}
            />
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 8 =================================================== */}

      <Page style={{ padding: 24 }}>
        {/* Category 6 Header */}
        <Text style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
          Category 6: Finding Area from 4 given sides of Isosceles Trapezium
        </Text>

        {/* Question 1 */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            backgroundColor: "white",
            padding: 12,
            marginBottom: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 13 }}>Question 1</Text>
            <Text style={{ color: "#EF4444", fontSize: 13 }}>Incorrect</Text>
          </View>

          <Text style={{ marginBottom: 12, lineHeight: 1.4, fontSize: 14 }}>
            The parallel sides of a trapezium are 28 cm and 14 cm. Its
            nonparallel sides are both equal, each being 25 cm. Find the area of
            the trapezium.
          </Text>

          <Text style={{ marginBottom: 10, fontWeight: "bold", fontSize: 13 }}>
            Steps Required
          </Text>

          <View style={{ marginBottom: 6 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 6,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Draw a diagram and label the given values
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 6,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Draw a parallel line to get a scalene triangle
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 6,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={waringImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Find the area of the isosceles triangle using heron's formula
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 6,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={waringImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Find the height of the triangle using the formula:1/2 x base x
                height = Area
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 6,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={errorImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>Find the Area of Trapezium</Text>
            </View>
          </View>

          <View style={{ marginTop: 12 }}>
            <Text style={{ marginBottom: 6, fontSize: 13 }}>
              Notebook Images
            </Text>
            <Image
              src={imagePageFive}
              style={{
                width: "100%",
                height: 150,
              }}
            />
          </View>
        </View>

        {/* Question 2 */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            backgroundColor: "white",
            padding: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 13 }}>Question 2</Text>
            <Text style={{ color: "#22C55E", fontSize: 13 }}>Correct</Text>
          </View>

          <Text style={{ marginBottom: 12, lineHeight: 1.4, fontSize: 14 }}>
            In the given figure, ABCD is a quadrilateral-shaped field in which
            diagonal BD is 60m. AL⊥BD, and CM⊥BD such that AL =15 m and CM = 13
            m. Find the area of the field.
          </Text>

          <Text style={{ marginBottom: 10, fontWeight: "bold", fontSize: 13 }}>
            Steps Required
          </Text>

          <View style={{ marginBottom: 6 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 6,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>Create or Label the Diagram</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 6,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Identify base and height of each Triangle
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 6,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Find the Area of each Triangle
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 6,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Find the Area of Quadrilateral
              </Text>
            </View>
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 8 =================================================== */}
      <Page style={{ padding: 20 }}>
        {/* Question 2 remaining notebook image section */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 8, fontSize: 13 }}>Notebook Images</Text>
          <Image
            src={imagePageFive}
            style={{
              width: "100%",
              height: 180,
            }}
          />
        </View>

        {/* Question 3 */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            backgroundColor: "white",
            padding: 14,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: "13px" }}>Question 3</Text>
            <Text style={{ color: "#22C55E", fontSize: 13 }}>Correct</Text>
          </View>

          <Text style={{ marginBottom: 14, lineHeight: 1.4, fontSize: 14 }}>
            In the given figure, ABCD is a quadrilateral-shaped field in which
            diagonal BD is 50m. AL⊥BD, and CM⊥BD such that AL =20 m and CM = 22
            m. Find the area of the field.
          </Text>

          <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 13 }}>
            Steps Required
          </Text>

          <View style={{ marginBottom: 8 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>Create or Label the Diagram</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Identify base and height of each Triangle
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Find the Area of each Triangle
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 14 }}>
                Find the Area of Quadrilateral
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 12 }}>
            <Text style={{ marginBottom: 8, fontSize: 13 }}>
              Notebook Images
            </Text>
            <Image
              src={imagePageFive}
              style={{
                width: "100%",
                height: 180,
              }}
            />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ChapterLevelQCReport;
