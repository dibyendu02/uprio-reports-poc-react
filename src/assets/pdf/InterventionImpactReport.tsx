import { Page, Text, View, Image, Document } from "@react-pdf/renderer";
import girlPicture from "@/assets/images/student-image-can-delete.png";
import star from "@/assets/images/Star.png";
import Logo from "@/assets/images/uprio-pdf-logo.png";
import vector from "@/assets/images/Vector-pdf-candelete.png";
import imagePageFive from "@/assets/images/page-5-image.png";
// import waringImage from "@/assets/images/pdf-warning.png";
import checkImage from "@/assets/images/pdf-check.png";
// import errorImage from "@/assets/images/pdf-error.png";

function InterventionImpactReport() {
  return (
    <Document>
      {/* --------------------------- Page One --------------------------- */}
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
            Intervention Impact Report
          </Text>
        </View>
      </Page>

      {/* --------------------------- Page Two --------------------------- */}
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
            <Text style={{ fontSize: 12, marginTop: 4 }}>
              National Public School, Yeswanthpur
            </Text>
            <Text style={{ fontSize: 12, marginTop: 12 }}>
              Grade: <Text style={{ fontWeight: "bold" }}>8th</Text>
            </Text>
            <Text style={{ fontSize: 12, marginTop: 12 }}>
              Student with Uprio from:{" "}
              <Text style={{ fontWeight: "bold" }}>9 Oct, 2024</Text>
            </Text>
            <Text style={{ fontSize: 12, marginTop: 4, fontWeight: "bold" }}>
              Area of a Trapezium & a Polygon
            </Text>
          </View>
        </View>

        {/* Class Details Section */}
        <View style={{ width: "100%", marginTop: 40 }}>
          <Text style={{ fontSize: 14, marginBottom: 14, fontWeight: "bold" }}>
            Class details:
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#f3f4f6",
              padding: 8,
              borderBottomWidth: 1,
              borderBottomColor: "#e5e7eb",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                Class Type
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>Date</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                Attendance
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                Practice Sheets
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                Notebook Evaluations
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 8,
              borderBottomWidth: 1,
              borderBottomColor: "#e5e7eb",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11 }}>Teach Class</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11 }}>19 May 24</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11 }}>Absent</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11 }}>Not Submitted</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11 }}>NA</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 8,
              borderBottomWidth: 1,
              borderBottomColor: "#e5e7eb",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11 }}>Teach Class</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11 }}>19 May 24</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11 }}>Present</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11 }}>Submitted</Text>
              <Text style={{ fontSize: 11, marginTop: 2, color: "#6b7280" }}>
                Sheet 1 (5/10 attempted)
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11 }}>4</Text>
            </View>
          </View>
        </View>

        {/* Chapter Level Understanding Section */}
        <View style={{ gap: 2, marginTop: 30 }}>
          <Text style={{ fontSize: 14, marginBottom: 4 }}>
            Pre Intervention Chapter Level Understanding
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

      {/* --------------------------- Page Three --------------------------- */}
      <Page size="A4" style={{ padding: 24, backgroundColor: "white" }}>
        {/* Intervention Class Header */}
        <View style={{ backgroundColor: "#EDF9FF", marginBottom: 12 }}>
          <Text style={{ padding: 8, fontSize: 14 }}>Intervention class</Text>
        </View>

        {/* Intervention Class Table */}
        <View style={{ marginBottom: 24 }}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#F9FAFB",
              padding: 8,
            }}
          >
            <Text style={{ flex: 1, fontSize: 12 }}>Date</Text>
            <Text style={{ flex: 1, fontSize: 12 }}>Attendance</Text>
            <Text style={{ flex: 1, fontSize: 12 }}>Notebook Evaluations</Text>
          </View>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <Text style={{ flex: 1, fontSize: 12 }}>19 May 24</Text>
            <Text style={{ flex: 1, fontSize: 12 }}>Present</Text>
            <Text style={{ flex: 1, fontSize: 12 }}>2</Text>
          </View>
        </View>

        {/* Post Intervention Understanding */}
        <Text style={{ fontSize: 14, fontWeight: "medium", marginBottom: 16 }}>
          Post Intervention Chapter Level Understanding
        </Text>

        {/* Well understood */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <View>
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
            <Text style={{ fontSize: 12 }}>Well understood</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#E5E7EB",
              textAlign: "left",
              padding: 12,
              width: "60%",
            }}
          >
            <Text style={{ fontSize: 12, textAlign: "left" }}>1/8</Text>
            <Text style={{ fontSize: 11, color: "#6B7280", textAlign: "left" }}>
              Categories
            </Text>
          </View>
        </View>

        {/* Understood but makes mistakes */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <View>
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
            <Text style={{ fontSize: 12, width: "30%" }}>
              Understood but Student Makes Silly Mistakes
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#E5E7EB",
              textAlign: "left",
              padding: 12,
              width: "60%",
            }}
          >
            <Text style={{ fontSize: 12, textAlign: "left" }}>1/8</Text>
            <Text style={{ fontSize: 11, color: "#6B7280", textAlign: "left" }}>
              Categories
            </Text>
          </View>
        </View>

        {/* Requires reinforcement */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <View>
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
            <Text style={{ fontSize: 12 }}>Requires further reinforcement</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#E5E7EB",
              textAlign: "left",
              padding: 12,
              width: "60%",
            }}
          >
            <Text style={{ fontSize: 12, textAlign: "left" }}>1/8</Text>
            <Text style={{ fontSize: 11, color: "#6B7280", textAlign: "left" }}>
              Categories
            </Text>
          </View>
        </View>

        {/* Categories Not Assessed */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <View>
            <Text style={{ fontSize: 12 }}>
              Categories Not Assessed in Class
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#E5E7EB",
              textAlign: "left",
              padding: 12,
              width: "60%",
            }}
          >
            <Text style={{ fontSize: 12, textAlign: "left" }}>1/8</Text>
            <Text style={{ fontSize: 11, color: "#6B7280", textAlign: "left" }}>
              Categories
            </Text>
          </View>
        </View>

        {/* Pre vs Post Section */}
        <View
          style={{ backgroundColor: "#EDF9FF", padding: 12, marginBottom: 16 }}
        >
          <Text style={{ fontSize: 14 }}>
            Pre vs. Post Intervention QC Level Understanding
          </Text>
        </View>

        <Text style={{ fontSize: 11, color: "#6B7280" }}>Category 5</Text>
        <Text style={{ fontSize: 14, marginTop: 4, marginBottom: 12 }}>
          Constructing histogram from the given data
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 12, marginRight: 8 }}>
            Improvement status:
          </Text>
          <View
            style={{
              backgroundColor: "#22C55E",
              paddingVertical: 2,
              paddingHorizontal: 8,
            }}
          >
            <Text style={{ fontSize: 11, color: "white" }}>Improved</Text>
          </View>
        </View>

        {/* Pre and Post Intervention Card */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 4,
          }}
        >
          {/* Pre Intervention */}
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 14, marginBottom: 8 }}>
              Pre Intervention
            </Text>
            <Text style={{ fontSize: 12, marginBottom: 4 }}>
              Understanding level:
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 16,
                  marginLeft: 5,
                }}
              >
                <Image
                  src={star}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />
                <Image
                  src={star}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />
              </View>
            </Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontSize: 12 }}>0/2 (0%)</Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Questions answered correctly;
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 12 }}>1/6 (17%)</Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage;
                </Text>
              </View>
            </View>
          </View>

          {/* Post Intervention */}
          <View
            style={{
              padding: 16,
              borderTopWidth: 1,
              borderTopColor: "#E5E7EB",
            }}
          >
            <Text style={{ fontSize: 14, marginBottom: 8 }}>
              Post Intervention
            </Text>
            <Text style={{ fontSize: 12, marginBottom: 4 }}>
              Understanding level:
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 16,
                  marginLeft: 4,
                }}
              >
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
            </Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontSize: 12 }}>1/1 (100%)</Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Questions answered correctly;
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 12 }}>3/3 (100%)</Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage;
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* --------------------------- Page Four --------------------------- */}

      <Page size="A4" style={{ padding: 24, backgroundColor: "white" }}>
        {/* Category Header */}
        <Text style={{ fontSize: 11, color: "#6B7280", marginBottom: 4 }}>
          Category 3
        </Text>
        <Text style={{ fontSize: 14, marginBottom: 12 }}>
          Creating Frequency Distribution Table using Tally Marks for Grouped
          Data
        </Text>

        {/* Improvement Status */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 12, marginRight: 8 }}>
            Improvement status:
          </Text>
          <View
            style={{
              backgroundColor: "#22C55E",
              paddingVertical: 2,
              paddingHorizontal: 8,
              borderRadius: 4,
            }}
          >
            <Text style={{ fontSize: 11, color: "white" }}>Improved</Text>
          </View>
        </View>

        {/* Assessment Card */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 4,
          }}
        >
          {/* Pre Intervention */}
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 14, marginBottom: 8 }}>
              Pre Intervention
            </Text>
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 12, marginBottom: 4 }}>
                Understanding level:
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  src={star}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />
                <Image
                  src={star}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />
              </View>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontSize: 12 }}>0/2 (0%)</Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Questions answered correctly;
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 12 }}>2/10 (20%)</Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage;
                </Text>
              </View>
            </View>
          </View>

          {/* Post Intervention */}
          <View
            style={{
              padding: 16,
              borderTopWidth: 1,
              borderTopColor: "#E5E7EB",
            }}
          >
            <Text style={{ fontSize: 14, marginBottom: 8 }}>
              Post Intervention
            </Text>
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 12, marginBottom: 4 }}>
                Understanding level:
              </Text>
              <View style={{ flexDirection: "row" }}>
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
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontSize: 12 }}>1/1 (100%)</Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Questions answered correctly;
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 12 }}>5/5 (100%)</Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage;
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* --------------------------- Page Five --------------------------- */}
      <Page size="A4" style={{ padding: 24, backgroundColor: "white" }}>
        {/* Header */}
        <View
          style={{
            backgroundColor: "#EDF9FF",
            padding: 12,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 14 }}>In-depth Step Level Evaluation</Text>
        </View>

        {/* Category Title */}
        <Text style={{ fontSize: 12, marginBottom: 12 }}>
          Category 3: Creating Frequency Distribution Table using Tally Marks
          for Grouped Data
        </Text>

        {/* Question Card */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 4,
            backgroundColor: "white",
            padding: 14,
            marginBottom: 16,
          }}
        >
          {/* Question Header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 13 }}>Question 1</Text>
            <View
              style={{
                backgroundColor: "#22C55E",
                paddingVertical: 2,
                paddingHorizontal: 8,
              }}
            >
              <Text style={{ color: "white", fontSize: 12 }}>Correct</Text>
            </View>
          </View>

          {/* Question Text */}
          <Text style={{ marginBottom: 14, lineHeight: 1.4, fontSize: 12 }}>
            The monthly electricity consumption (in kWH) of 20 households in a
            neighborhood has been recorded as follows:
            364,412,375,401,456,420,384,390,437,405,439,374,398,442,351,409,367,395,412,430.
            Prepare a frequency table with equal class sizes. One such class is
            340-360, where 360 is not included.
          </Text>

          {/* Steps Required */}
          <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 13 }}>
            Steps Required
          </Text>

          <View style={{ marginBottom: 16 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 12 }}>
                Identify the class intervals for the data with equal class sizes
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
              <Text style={{ fontSize: 12 }}>
                Draw tally marks for each class interval
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
              <Text style={{ fontSize: 12 }}>
                Use tally marks to count the frequency
              </Text>
            </View>
          </View>

          {/* Notebook Images */}
          <View>
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

      {/* --------------------------- Page Six --------------------------- */}
      <Page size="A4" style={{ padding: 24, backgroundColor: "white" }}>
        {/* Category Title */}
        <Text style={{ fontSize: 12, marginBottom: 16 }}>
          Category 5: Constructing Histogram from the given Data
        </Text>

        {/* Question Card */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 4,
            backgroundColor: "white",
            padding: 14,
            marginBottom: 16,
          }}
        >
          {/* Question Header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 13 }}>Question 1</Text>
            <View
              style={{
                backgroundColor: "#22C55E",
                paddingVertical: 2,
                paddingHorizontal: 8,
              }}
            >
              <Text style={{ color: "white", fontSize: 12 }}>Correct</Text>
            </View>
          </View>

          {/* Question Text */}
          <Text style={{ marginBottom: 14, lineHeight: 1.4, fontSize: 12 }}>
            Imagine a study on the daily commuting times (in minutes) for 50
            employees at a company. The company wants to understand the
            distribution of commuting times to improve scheduling and support
            remote work initiatives. Construct a histogram for the data
            provided.{"\n\n"}
            Daily Commuting Times (in minutes): 15, 22, 45, 35, 30, 50, 25, 20,
            40, 55, 30, 18, 28, 22, 38, 42, 37, 25, 30, 25, 20, 40, 60, 48, 32,
            28, 25, 35, 43, 27, 19, 24, 53, 29, 30, 44, 39, 33, 46, 23, 21, 31,
            50, 35, 41, 30, 34, 45, 30.
          </Text>

          {/* Steps Required */}
          <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 13 }}>
            Steps Required
          </Text>

          <View style={{ marginBottom: 16 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                gap: 6,
                alignItems: "center",
              }}
            >
              <Image src={checkImage} style={{ height: 12, width: 12 }} />
              <Text style={{ fontSize: 12 }}>
                Identify the class intervals for the data with equal class size
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
              <Text style={{ fontSize: 12 }}>
                Draw tally marks for each class interval
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
              <Text style={{ fontSize: 12 }}>
                Use tally marks to count the frequency
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
              <Text style={{ fontSize: 12 }}>
                On the graph paper, mark class intervals on the x-axis and the
                corresponding frequencies on y-axis
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
              <Text style={{ fontSize: 12 }}>
                Construct rectangles with class intervals as base and the
                corresponding frequencies as height
              </Text>
            </View>
          </View>

          {/* Notebook Images */}
          <View>
            <Text style={{ marginBottom: 8, fontSize: 13 }}>
              Notebook Images
            </Text>
            <Image
              src={imagePageFive}
              style={{
                width: "100%",
                height: 240,
              }}
            />
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default InterventionImpactReport;
