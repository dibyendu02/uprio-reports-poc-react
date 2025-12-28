import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import girlPicture from "@/assets/images/student-image-can-delete.png";
import star from "@/assets/images/Star.png";
import Logo from "@/assets/images/uprio-pdf-logo.png";
import vector from "@/assets/images/Vector-pdf-candelete.png";

const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#000",
  },
  header: {
    flexDirection: "row",
    gap: 24,
  },
  profileImage: {
    width: 100,
    height: 120,
  },
  studentDetails: {
    flex: 1,
  },
  studentName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  studentInfo: {
    fontSize: 12,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "medium",
    marginTop: 60,
    marginBottom: 16,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableCell: {
    padding: 12,
    flex: 1,
    textAlign: "left",
  },
  starsContainer: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 2,
  },
  starImage: {
    width: 16,
    height: 16,
  },
  chapterRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  chapterStars: {
    width: "20%",
    marginRight: 12,
  },
  chapterCard: {
    width: "80%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: 12,
    marginTop: 4,
  },
  cardValue: {
    fontSize: 14,
    fontWeight: "medium",
  },
});

const ExamStatusReport = () => {
  const data = [
    {
      Subject: "Maths 1",
      Date: "Direct and Inverse Proportions, Factorisation, Percentage",
    },
    {
      Subject: "Maths 2",
      Date: "Area of a Trapezium and a Polygon, Introduction to coordinate geometry",
    },
  ];
  const newData = [
    {
      Chapters: "Factorisation",
      TotalClassesScheduled: "17",
      TotalClassesAttended: "12(78%)",
    },
    {
      Chapters: "Percentage",
      TotalClassesScheduled: "Not yet scheduled",
      TotalClassesAttended: "NA",
    },
    {
      Chapters: "Direct and Inverse Proportions",
      TotalClassesScheduled: "16",
      TotalClassesAttended: "12(100%)",
    },
  ];
  const newData2 = [
    {
      Chapters: "Factorisation",
      TotalClassesScheduled: "2",
      TotalClassesAttended: "2(100%)",
    },
    {
      Chapters: "Percentage",
      TotalClassesScheduled: "NA",
      TotalClassesAttended: "NA",
    },
    {
      Chapters: "Direct and Inverse Proportions",
      TotalClassesScheduled: "1",
      TotalClassesAttended: "0(0%)",
    },
  ];
  const page3Data = [
    {
      Chapters: "Introduction to Coordinate Geometry",
      TotalClassesScheduled: "15",
      TotalClassesAttended: "11(75%)",
    },
    {
      Chapters: "Area of a Trapezium and a Polygon",
      TotalClassesScheduled: "4",
      TotalClassesAttended: "4(100%)",
    },
  ];
  const page3DataNew = [
    {
      Chapters: "Introduction to Coordinate Geometry",
      TotalClassesScheduled: "2",
      TotalClassesAttended: "2(100%)",
    },
    {
      Chapters: "Area of a Trapezium and a Polygon",
      TotalClassesScheduled: "NA",
      TotalClassesAttended: "NA",
    },
  ];
  const page3Data2 = [
    {
      Date: "22 Oct, 2024",
      ClassType: "Intervention, Evaluation",
      ChapterName: "Factorisation, Direct and Inverse Proportions",
    },
    {
      Date: "5 Oct, 2024",
      ClassType: "Regular",
      ChapterName: "Factorisation",
    },
    {
      Date: "3 Oct, 2024",
      ClassType: "Regular, Evaluation",
      ChapterName: "Percentage, Direct and Inverse Proportions",
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
            Exam Status Report
          </Text>
        </View>
      </Page>

      {/* // ============================================== this is page 2 =================================================== */}

      <Page style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image src={girlPicture} style={styles.profileImage} />
          <View style={styles.studentDetails}>
            <Text style={styles.studentName}>Rupashri Chaterjee</Text>
            <Text style={styles.studentInfo}>
              National Public School, Yeswanthpur
            </Text>
            <Text style={styles.studentInfo}>
              Grade: <Text style={{ fontWeight: "bold" }}>8th</Text>
            </Text>
            <Text style={styles.studentInfo}>
              Student with Uprio from:{" "}
              <Text style={{ fontWeight: "bold" }}>9 Oct, 2024</Text>
            </Text>
            <Text style={[styles.studentInfo, { fontWeight: "bold" }]}>
              Area of a Trapezium & a Polygon
            </Text>
          </View>
        </View>

        {/* Class Details Section */}
        <Text style={styles.sectionTitle}>Mid-Terms Exam:List of chapters</Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              gap: "68px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <Text style={{ padding: 12 }}>Subject</Text>
            <Text style={{ padding: 12 }}>Date</Text>
          </View>
          {data.map((row, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                gap: "68px",
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              <Text style={{ padding: 12 }}>{row.Subject}</Text>
              <Text style={{ padding: 12 }}>{row.Date}</Text>
            </View>
          ))}
        </View>

        {/* Chapter Level Understanding Section */}
        <View
          style={{
            marginTop: "36px",
            backgroundColor: "#EDF9FF",
            paddingTop: "12px",
            paddingBottom: "12px",
            paddingLeft: "8px",
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "14px",
              color: "#121B23",
            }}
          >
            Rupashri’s Input for Mid-Term Exam:
          </Text>
        </View>

        <View
          style={{
            marginTop: "16px",
            marginBottom: "50px",
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "16.94px",
              marginBottom: "16px",
            }}
          >
            Maths 1
          </Text>
          <Text
            style={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "14.52px",
              marginBottom: "8px",
            }}
          >
            Teach, Evaluation & Intervention Classes{" "}
          </Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#f0f0f0",
              }}
            >
              <Text style={{ padding: 12 }}>Chapters</Text>
              <Text
                style={{
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  marginLeft: "161px",
                }}
              >
                Total Classes Scheduled
              </Text>
              <Text
                style={{
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  marginLeft: "56px",
                }}
              >
                Total Classes Attended
              </Text>
            </View>
            {newData.map((row, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  gap: "61px",
                  paddingLeft: "10px",
                }}
              >
                <Text style={{ paddingVertical: "12px" }}>{row.Chapters}</Text>
                <Text
                  style={{
                    paddingVertical: "12px",
                    marginLeft: `${
                      row.Chapters == "Factorisation"
                        ? "102px"
                        : row.Chapters == "Percentage"
                        ? "112px"
                        : "25px"
                    }`,
                  }}
                >
                  {row.TotalClassesScheduled}
                </Text>
                <Text
                  style={{
                    paddingVertical: "12px",
                    marginLeft: `${
                      row.TotalClassesScheduled == "17"
                        ? 92
                        : row.Chapters == "Percentage"
                        ? 20
                        : 92
                    }`,
                  }}
                >
                  {row.TotalClassesAttended}
                </Text>
              </View>
            ))}
          </View>
          <Text
            style={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "14.52px",
              marginTop: "16px",
              marginBottom: "8px",
            }}
          >
            Practice Sheets
          </Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#f0f0f0",
              }}
            >
              <Text style={{ padding: 12 }}>Chapters</Text>
              <Text
                style={{
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  marginLeft: "161px",
                }}
              >
                Total Practice Sheets Assigned
              </Text>
              <Text
                style={{
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  marginLeft: "22px",
                }}
              >
                Practice Sheets Submitted
              </Text>
            </View>
            {newData2.map((row, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  gap: "61px",
                  paddingLeft: "10px",
                }}
              >
                <Text style={{ paddingVertical: "12px" }}>{row.Chapters}</Text>
                <Text
                  style={{
                    paddingVertical: "12px",
                    marginLeft: `${
                      row.Chapters == "Factorisation"
                        ? "102px"
                        : row.Chapters == "Percentage"
                        ? "110px"
                        : "25px"
                    }`,
                  }}
                >
                  {row.TotalClassesScheduled}
                </Text>
                <Text
                  style={{
                    paddingVertical: "12px",
                    marginLeft: `${
                      row.TotalClassesScheduled == "17"
                        ? 92
                        : row.Chapters == "Percentage"
                        ? 82
                        : 92
                    }`,
                  }}
                >
                  {row.TotalClassesAttended}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 3 =================================================== */}

      <Page
        size="A4"
        style={{
          padding: 24,
          fontSize: 10,
          fontFamily: "Helvetica",
          color: "#000",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            marginTop: "16px",
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "16.94px",
              marginBottom: "16px",
            }}
          >
            Maths 2
          </Text>
          <Text
            style={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "14.52px",
              marginBottom: "8px",
            }}
          >
            Teach, Evaluation & Intervention Classes{" "}
          </Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#f0f0f0",
              }}
            >
              <Text style={{ padding: 12 }}>Chapters</Text>
              <Text
                style={{
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  marginLeft: "161px",
                }}
              >
                Total Classes Scheduled
              </Text>
              <Text
                style={{
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  marginLeft: "56px",
                }}
              >
                Total Classes Attended
              </Text>
            </View>
            {page3Data.map((row, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  gap: "61px",
                  paddingLeft: "10px",
                }}
              >
                <Text style={{ paddingVertical: "12px" }}>{row.Chapters}</Text>
                <Text
                  style={{
                    paddingVertical: "12px",
                    marginLeft: `${
                      row.Chapters == "Introduction to Coordinate Geometry"
                        ? "0px"
                        : "7px"
                    }`,
                  }}
                >
                  {row.TotalClassesScheduled}
                </Text>
                <Text
                  style={{
                    paddingVertical: "12px",
                    marginLeft: `${
                      row.TotalClassesScheduled == "15" ? 90 : 95
                    }`,
                  }}
                >
                  {row.TotalClassesAttended}
                </Text>
              </View>
            ))}
          </View>
          <Text
            style={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "14.52px",
              marginTop: "16px",
              marginBottom: "8px",
            }}
          >
            Practice Sheets
          </Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#f0f0f0",
              }}
            >
              <Text style={{ padding: 12 }}>Chapters</Text>
              <Text
                style={{
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  marginLeft: "161px",
                }}
              >
                Total Practice Sheets Assigned
              </Text>
              <Text
                style={{
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  marginLeft: "22px",
                }}
              >
                Practice Sheets Submitted
              </Text>
            </View>
            {page3DataNew.map((row, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  gap: "61px",
                  paddingLeft: "10px",
                }}
              >
                <Text style={{ paddingVertical: "12px" }}>{row.Chapters}</Text>
                <Text
                  style={{
                    paddingVertical: "12px",
                    marginLeft: `${
                      row.Chapters == "Introduction to Coordinate Geometry"
                        ? "0px"
                        : "7px"
                    }`,
                  }}
                >
                  {row.TotalClassesScheduled}
                </Text>
                <Text
                  style={{
                    paddingVertical: "12px",
                    marginLeft: `${
                      row.TotalClassesScheduled == "17"
                        ? 92
                        : row.Chapters == "Percentage"
                        ? 82
                        : 92
                    }`,
                  }}
                >
                  {row.TotalClassesAttended}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View
          style={{
            marginTop: "16px",
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "16.94px",
              marginBottom: "16px",
            }}
          >
            Overall
          </Text>
          <Text
            style={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "14.52px",
              marginBottom: "8px",
            }}
          >
            Teach, Evaluation & Intervention Classes{" "}
          </Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#f0f0f0",
              }}
            >
              <Text
                style={{
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  marginLeft: "217px",
                }}
              >
                Total Classes Scheduled
              </Text>
              <Text
                style={{
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  marginLeft: "56px",
                }}
              >
                Total Classes Attended
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                gap: "61px",
                paddingLeft: "10px",
              }}
            >
              <Text style={{ padding: "12px" }}>Overall</Text>
              <Text style={{ paddingVertical: "12px", marginLeft: "95px" }}>
                26
              </Text>

              <Text
                style={{
                  paddingVertical: "12px",
                  marginLeft: "95px",
                }}
              >
                22(84%)
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "14.52px",
              marginTop: "16px",
              marginBottom: "8px",
            }}
          >
            Practice Sheets
          </Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#f0f0f0",
              }}
            >
              <Text
                style={{
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  marginLeft: "217px",
                }}
              >
                Total Practice Sheets Assigned
              </Text>
              <Text
                style={{
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  marginLeft: "35px",
                }}
              >
                Total Practice Sheets Attended
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                gap: "61px",
                paddingLeft: "10px",
              }}
            >
              <Text style={{ padding: "12px" }}>Overall</Text>
              <Text style={{ paddingVertical: "12px", marginLeft: "95px" }}>
                5
              </Text>

              <Text
                style={{
                  paddingVertical: "12px",
                  marginLeft: "105px",
                }}
              >
                2(40%)
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: "16px",
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "16.94px",
              marginBottom: "16px",
            }}
          >
            Details of classes not attended
          </Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#f0f0f0",
                paddingVertical: 12,
              }}
            >
              <Text style={{ flex: 1, paddingLeft: 10, fontWeight: "bold" }}>
                Dates absent
              </Text>
              <Text style={{ flex: 1, paddingLeft: 10, fontWeight: "bold" }}>
                Class type
              </Text>
              <Text style={{ flex: 2, paddingLeft: 10, fontWeight: "bold" }}>
                Chapter name
              </Text>
            </View>
            {page3Data2.map((row, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  paddingVertical: 12,
                }}
              >
                <Text style={{ flex: 1, paddingLeft: 10 }}>{row.Date}</Text>
                <Text style={{ flex: 1, paddingLeft: 10 }}>
                  {row.ClassType}
                </Text>
                <Text style={{ flex: 2, paddingLeft: 10 }}>
                  {row.ChapterName}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 4 =================================================== */}

      <Page
        size="A4"
        style={{
          padding: "24px",
          backgroundColor: "#ffffff",
          fontFamily: "Helvetica",
        }}
      >
        <View
          style={{
            backgroundColor: "#f0f8ff",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Rupashri's understanding and progress of Mid-Term Syllabus Chapters:
          </Text>
        </View>
        {/* Direct and Inverse Proportions Section */}
        <View style={{ marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 16,
              fontWeight: "bold",
            }}
          >
            Direct and Inverse Proportions
          </Text>

          <View style={{ marginBottom: 16 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text style={{ fontSize: 14, marginRight: 8 }}>
                Chapter Level Understanding:
              </Text>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
              </View>
            </View>

            <Text style={{ fontSize: 14 }}>
              Total No. of Categories in Chapter: 9
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: "#e0e0e0",
              borderRadius: 4,
              padding: 16,
            }}
          >
            {/* First Row */}
            <View
              style={{
                flexDirection: "row",
                marginBottom: 24,
              }}
            >
              {/* Left Side */}
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                </View>
                <Text style={{ fontSize: 14 }}>Well Understood</Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>9 (100%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>

              {/* Right Side */}
              <View style={{ flex: 1, marginLeft: 16 }}>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                </View>
                <Text style={{ fontSize: 14 }}>
                  Understood but makes Silly Mistakes
                </Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>0 (0%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>
            </View>

            {/* Second Row */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* Left Side */}
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                </View>
                <Text style={{ fontSize: 14 }}>
                  Requires Further Reinforcement
                </Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>0 (0%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>

              {/* Right Side */}
              <View style={{ flex: 1, marginLeft: 16 }}>
                <Text style={{ fontSize: 14, marginTop: 20 }}>
                  Categories Not Assessed in Class
                </Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>0 (0%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* ////////  */}

        <View style={{ marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 16,
              fontWeight: "bold",
            }}
          >
            Direct and Inverse Proportions
          </Text>

          <View style={{ marginBottom: 16 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text style={{ fontSize: 14, marginRight: 8 }}>
                Chapter Level Understanding:
              </Text>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
              </View>
            </View>

            <Text style={{ fontSize: 14 }}>
              Total No. of Categories in Chapter: 9
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: "#e0e0e0",
              borderRadius: 4,
              padding: 16,
            }}
          >
            {/* First Row */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 24,
              }}
            >
              {/* Left Side */}
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                </View>
                <Text style={{ fontSize: 14 }}>Well Understood</Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>9 (100%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>

              {/* Right Side */}
              <View style={{ flex: 1, marginLeft: 16 }}>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                </View>
                <Text style={{ fontSize: 14 }}>
                  Understood but makes Silly Mistakes
                </Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>0 (0%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>
            </View>

            {/* Second Row */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* Left Side */}
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                </View>
                <Text style={{ fontSize: 14 }}>
                  Requires Further Reinforcement
                </Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>0 (0%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>

              {/* Right Side */}
              <View style={{ flex: 1, marginLeft: 16 }}>
                <Text style={{ fontSize: 14, marginTop: 20 }}>
                  Categories Not Assessed in Class
                </Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>0 (0%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 5 =================================================== */}

      <Page
        size="A4"
        style={{
          padding: "24px",
          backgroundColor: "#ffffff",
          fontFamily: "Helvetica",
        }}
      >
        {/* Direct and Inverse Proportions Section */}
        <View style={{ marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 16,
              fontWeight: "bold",
            }}
          >
            Direct and Inverse Proportions
          </Text>

          <View style={{ marginBottom: 16 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text style={{ fontSize: 14, marginRight: 8 }}>
                Chapter Level Understanding:
              </Text>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
              </View>
            </View>

            <Text style={{ fontSize: 14 }}>
              Total No. of Categories in Chapter: 9
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: "#e0e0e0",
              borderRadius: 4,
              padding: 16,
            }}
          >
            {/* First Row */}
            <View
              style={{
                flexDirection: "row",
                marginBottom: 24,
              }}
            >
              {/* Left Side */}
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                </View>
                <Text style={{ fontSize: 14 }}>Well Understood</Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>9 (100%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>

              {/* Right Side */}
              <View style={{ flex: 1, marginLeft: 16 }}>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                </View>
                <Text style={{ fontSize: 14 }}>
                  Understood but makes Silly Mistakes
                </Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>0 (0%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>
            </View>

            {/* Second Row */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* Left Side */}
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                </View>
                <Text style={{ fontSize: 14 }}>
                  Requires Further Reinforcement
                </Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>0 (0%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>

              {/* Right Side */}
              <View style={{ flex: 1, marginLeft: 16 }}>
                <Text style={{ fontSize: 14, marginTop: 20 }}>
                  Categories Not Assessed in Class
                </Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>0 (0%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* ////////  */}

        <View style={{ marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 16,
              fontWeight: "bold",
            }}
          >
            Direct and Inverse Proportions
          </Text>

          <View style={{ marginBottom: 16 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text style={{ fontSize: 14, marginRight: 8 }}>
                Chapter Level Understanding:
              </Text>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
                <Image src={star} style={{ width: 16, height: 16 }} />
              </View>
            </View>

            <Text style={{ fontSize: 14 }}>
              Total No. of Categories in Chapter: 9
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: "#e0e0e0",
              borderRadius: 4,
              padding: 16,
            }}
          >
            {/* First Row */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 24,
              }}
            >
              {/* Left Side */}
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                </View>
                <Text style={{ fontSize: 14 }}>Well Understood</Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>9 (100%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>

              {/* Right Side */}
              <View style={{ flex: 1, marginLeft: 16 }}>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                </View>
                <Text style={{ fontSize: 14 }}>
                  Understood but makes Silly Mistakes
                </Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>0 (0%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>
            </View>

            {/* Second Row */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* Left Side */}
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 4 }}>
                  <Image src={star} style={{ width: 16, height: 16 }} />
                  <Image src={star} style={{ width: 16, height: 16 }} />
                </View>
                <Text style={{ fontSize: 14 }}>
                  Requires Further Reinforcement
                </Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>0 (0%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>

              {/* Right Side */}
              <View style={{ flex: 1, marginLeft: 16 }}>
                <Text style={{ fontSize: 14, marginTop: 20 }}>
                  Categories Not Assessed in Class
                </Text>
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: 8,
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>0 (0%)</Text>
                  <Text style={{ fontSize: 12, color: "#666666" }}>
                    Categories
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 6 =================================================== */}

      <Page
        size="A4"
        style={{
          flexDirection: "column",
          backgroundColor: "#ffffff",
          padding: 30,
        }}
      >
        {/* Header */}
        <View
          style={{
            backgroundColor: "#f0f8ff",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Rupashri's Mid-Term Revision Plan
          </Text>
        </View>

        {/* Table Header */}
        <View
          style={{
            flexDirection: "row",

            backgroundColor: "#f5f5f5",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        >
          <View style={{ width: "20%", paddingLeft: 8 }}>
            <Text style={{ fontSize: "11px", fontWeight: "bold" }}>Date</Text>
          </View>
          <View style={{ width: "35%", paddingLeft: 8 }}>
            <Text style={{ fontSize: "11px", fontWeight: "bold" }}>
              Chapter name
            </Text>
          </View>
          <View style={{ width: "25%", paddingLeft: 8 }}>
            <Text style={{ fontSize: "11px", fontWeight: "bold" }}>
              Class type
            </Text>
          </View>
          <View style={{ width: "20%", paddingLeft: 8 }}>
            <Text style={{ fontSize: "11px", fontWeight: "bold" }}>
              Class Timing
            </Text>
          </View>
        </View>

        {/* Row 1 */}
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#E5E7EB",
            borderBottomWidth: 1,
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          <View
            style={{
              width: "20%",
              paddingLeft: 8,
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <Text style={{ fontSize: 10 }}>28 Nov, 2024</Text>
          </View>
          <View
            style={{
              width: "35%",
              paddingLeft: 8,
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <Text style={{ fontSize: 10 }}>Circles, Percentage</Text>
          </View>
          <View
            style={{
              width: "25%",
              paddingLeft: 8,
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <Text style={{ fontSize: 10 }}>Intervention, Evaluation</Text>
          </View>
          <View
            style={{
              width: "20%",
              paddingLeft: 8,
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <Text style={{ fontSize: 10 }}>06:00 pm to 07:30 pm</Text>
          </View>
        </View>

        {/* Row 2 */}
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#E5E7EB",
            borderBottomWidth: 1,
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          <View
            style={{
              width: "20%",
              paddingLeft: 8,
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          >
            <Text style={{ fontSize: 10 }}>26 Nov, 2024</Text>
          </View>
          <View
            style={{
              width: "35%",
              paddingLeft: 8,
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          >
            <Text style={{ fontSize: 10 }}>
              Factorisation, Area of a Trapezium and a Polygon
            </Text>
          </View>
          <View
            style={{
              width: "25%",
              paddingLeft: 8,
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          >
            <Text style={{ fontSize: 10 }}>Regular</Text>
          </View>
          <View
            style={{
              width: "20%",
              paddingLeft: 8,
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          >
            <Text style={{ fontSize: 10 }}>06:00 pm to 07:30 pm</Text>
          </View>
        </View>

        {/* Row 3 */}
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#E5E7EB",
            borderBottomWidth: 1,
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          <View
            style={{
              width: "20%",
              paddingLeft: 8,
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          >
            <Text style={{ fontSize: 10 }}>22 Nov, 2024</Text>
          </View>
          <View
            style={{
              width: "35%",
              paddingLeft: 8,
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          >
            <Text style={{ fontSize: 10 }}>Factorisation</Text>
          </View>
          <View
            style={{
              width: "25%",
              paddingLeft: 8,
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          >
            <Text style={{ fontSize: 10 }}>Regular, Evaluation</Text>
          </View>
          <View
            style={{
              width: "20%",
              paddingLeft: 8,
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          >
            <Text style={{ fontSize: 10 }}>06:00 pm to 07:30 pm</Text>
          </View>
        </View>

        {/* Row 4 */}
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#E5E7EB",
            borderBottomWidth: 1,
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          <View
            style={{
              width: "20%",
              paddingLeft: 8,
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          >
            <Text style={{ fontSize: 10 }}>21 Nov, 2024</Text>
          </View>
          <View
            style={{
              width: "35%",
              paddingLeft: 8,
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          >
            <Text style={{ fontSize: 10 }}>
              Introduction to coordinate geometry, Direct and Inverse
              Proportions
            </Text>
          </View>
          <View
            style={{
              width: "25%",
              paddingLeft: 8,
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          >
            <Text style={{ fontSize: 10 }}>Regular</Text>
          </View>
          <View
            style={{
              width: "20%",
              paddingLeft: 8,
              paddingTop: "7px",
              paddingBottom: "7px",
            }}
          >
            <Text style={{ fontSize: 10 }}>06:00 pm to 07:30 pm</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#f0f8ff",
            padding: 10,
            marginBottom: "16px",
            marginTop: "16px",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Rupashri's Mid-Term Revision Plan
          </Text>
        </View>
        <Text
          style={{ fontSize: "14px", fontWeight: 600, marginBottom: "14px" }}
        >
          Cubes And Cube Roots
        </Text>
        <View>
          <View style={{ marginBottom: "12px" }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image source={star} style={{ width: "16px", height: "16px" }} />
              <Image source={star} style={{ width: "16px", height: "16px" }} />
              <Image source={star} style={{ width: "16px", height: "16px" }} />
            </View>
            <Text
              style={{ fontSize: "12px", fontWeight: 600, marginTop: "6px" }}
            >
              Understood but makes Silly Mistakes
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: "10px",
                color: "#6B7280",
                marginBottom: "6px",
              }}
            >
              Category 14
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginBottom: "6px",
                fontWeight: "normal",
              }}
            >
              Long Division
            </Text>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                borderRadius: 4,
                backgroundColor: "white",
                marginBottom: "18px",
              }}
            >
              <View
                style={{
                  padding: 12,
                  flex: 1,
                }}
              >
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
                  (4/4) 100%
                </Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: "10px",
                color: "#6B7280",
                marginBottom: "6px",
              }}
            >
              Category 14
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginBottom: "6px",
                fontWeight: "normal",
              }}
            >
              Long Division
            </Text>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                borderRadius: 4,
                backgroundColor: "white",
                marginBottom: "18px",
              }}
            >
              <View
                style={{
                  padding: 12,
                  flex: 1,
                }}
              >
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
                  (4/4) 100%
                </Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: "10px",
                color: "#6B7280",
                marginBottom: "6px",
              }}
            >
              Category 14
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginBottom: "6px",
                fontWeight: "normal",
              }}
            >
              Long Division
            </Text>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                borderRadius: 4,
                backgroundColor: "white",
                marginBottom: "15px",
              }}
            >
              <View
                style={{
                  padding: 12,
                  flex: 1,
                }}
              >
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
                  (4/4) 100%
                </Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 7 =================================================== */}

      <Page style={{ padding: "24px" }}>
        <View>
          <Text
            style={{
              fontSize: "10px",
              color: "#6B7280",
              marginBottom: "6px",
            }}
          >
            Category 14
          </Text>
          <Text
            style={{
              fontSize: "12px",
              marginBottom: "6px",
              fontWeight: "normal",
            }}
          >
            Finding product using identity
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 4,
              backgroundColor: "white",
              marginBottom: "24px",
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
        <View>
          <View style={{ marginBottom: "12px" }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image source={star} style={{ width: "16px", height: "16px" }} />
              <Image source={star} style={{ width: "16px", height: "16px" }} />
              <Image source={star} style={{ width: "16px", height: "16px" }} />
            </View>
            <Text
              style={{ fontSize: "12px", fontWeight: 600, marginTop: "6px" }}
            >
              Understood but makes Silly Mistakes
            </Text>
          </View>
          <View>
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
                  (4/4) 100%
                </Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={{ marginBottom: "12px" }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image source={star} style={{ width: "16px", height: "16px" }} />
              <Image source={star} style={{ width: "16px", height: "16px" }} />
              <Image source={star} style={{ width: "16px", height: "16px" }} />
            </View>
            <Text
              style={{ fontSize: "12px", fontWeight: 600, marginTop: "6px" }}
            >
              Understood but makes Silly Mistakes
            </Text>
          </View>
          <View>
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
                  (4/4) 100%
                </Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={{ marginBottom: "12px" }}>
            <Text
              style={{ fontSize: "12px", fontWeight: 600, marginTop: "6px" }}
            >
              Understood but makes Silly Mistakes
            </Text>
          </View>
          <View>
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
                  (4/4) 100%
                </Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{ fontSize: "14px", fontWeight: 600, marginBottom: "16px" }}
        >
          Cubes And Cube Roots
        </Text>
        <View>
          <View style={{ marginBottom: "12px" }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image source={star} style={{ width: "16px", height: "16px" }} />
              <Image source={star} style={{ width: "16px", height: "16px" }} />
              <Image source={star} style={{ width: "16px", height: "16px" }} />
            </View>
            <Text
              style={{ fontSize: "12px", fontWeight: 600, marginTop: "6px" }}
            >
              Understood but makes Silly Mistakes
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: "10px",
                color: "#6B7280",
                marginBottom: "6px",
              }}
            >
              Category 14
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginBottom: "6px",
                fontWeight: "normal",
              }}
            >
              Long Division
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
                  (4/4) 100%
                </Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* // ============================================== this is page 8 =================================================== */}

      <Page style={{ padding: "24px" }}>
        <View>
          <Text
            style={{
              fontSize: "10px",
              color: "#6B7280",
              marginBottom: "6px",
            }}
          >
            Category 14
          </Text>
          <Text
            style={{
              fontSize: "12px",
              marginBottom: "6px",
              fontWeight: "normal",
            }}
          >
            Finding product using identity
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 4,
              backgroundColor: "white",
              marginBottom: "24px",
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
        <View>
          <Text
            style={{
              fontSize: "10px",
              color: "#6B7280",
              marginBottom: "6px",
            }}
          >
            Category 14
          </Text>
          <Text
            style={{
              fontSize: "12px",
              marginBottom: "6px",
              fontWeight: "normal",
            }}
          >
            Finding product using identity
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 4,
              backgroundColor: "white",
              marginBottom: "24px",
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
        <View>
          <Text
            style={{
              fontSize: "10px",
              color: "#6B7280",
              marginBottom: "6px",
            }}
          >
            Category 14
          </Text>
          <Text
            style={{
              fontSize: "12px",
              marginBottom: "6px",
              fontWeight: "normal",
            }}
          >
            Finding product using identity
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 4,
              backgroundColor: "white",
              marginBottom: "24px",
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
        <View>
          <Text
            style={{
              fontSize: "10px",
              color: "#6B7280",
              marginBottom: "6px",
            }}
          >
            Category 14
          </Text>
          <Text
            style={{
              fontSize: "12px",
              marginBottom: "6px",
              fontWeight: "normal",
            }}
          >
            Finding product using identity
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 4,
              backgroundColor: "white",
              marginBottom: "24px",
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
        <View>
          <Text
            style={{
              fontSize: "10px",
              color: "#6B7280",
              marginBottom: "6px",
            }}
          >
            Category 14
          </Text>
          <Text
            style={{
              fontSize: "12px",
              marginBottom: "6px",
              fontWeight: "normal",
            }}
          >
            Finding product using identity
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 4,
              backgroundColor: "white",
              marginBottom: "24px",
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
        <View>
          <Text
            style={{
              fontSize: "10px",
              color: "#6B7280",
              marginBottom: "6px",
            }}
          >
            Category 14
          </Text>
          <Text
            style={{
              fontSize: "12px",
              marginBottom: "6px",
              fontWeight: "normal",
            }}
          >
            Finding product using identity
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 4,
              backgroundColor: "white",
              marginBottom: "24px",
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

      {/* // ============================================== this is page 9 =================================================== */}

      <Page style={{ padding: "24px" }}>
        <View>
          <View style={{ marginBottom: "12px" }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image source={star} style={{ width: "16px", height: "16px" }} />
              <Image source={star} style={{ width: "16px", height: "16px" }} />
              <Image source={star} style={{ width: "16px", height: "16px" }} />
            </View>
            <Text
              style={{ fontSize: "12px", fontWeight: 600, marginTop: "6px" }}
            >
              Understood but makes Silly Mistakes
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: "10px",
                color: "#6B7280",
                marginBottom: "6px",
              }}
            >
              Category 14
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginBottom: "6px",
                fontWeight: "normal",
              }}
            >
              Long Division
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
                  (4/4) 100%
                </Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* // ============================================== */}
        <View>
          <View style={{ marginBottom: "16px" }}>
            <Text
              style={{ fontSize: "12px", fontWeight: 600, marginTop: "6px" }}
            >
              equires Further Reinforcement
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: "10px",
                color: "#6B7280",
                marginBottom: "6px",
              }}
            >
              Category 14
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginBottom: "6px",
                fontWeight: "normal",
              }}
            >
              Finding product using identity
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
                  (4/4) 100%
                </Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* //  */}
        <View>
          <View style={{ marginBottom: "12px" }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image source={star} style={{ width: "16px", height: "16px" }} />
              <Image source={star} style={{ width: "16px", height: "16px" }} />
            </View>
            <Text
              style={{ fontSize: "12px", fontWeight: 600, marginTop: "6px" }}
            >
              Finding product using identity
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: "10px",
                color: "#6B7280",
                marginBottom: "6px",
              }}
            >
              Category 14
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginBottom: "6px",
                fontWeight: "normal",
              }}
            >
              Finding product using identity
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
                  (4/4) 100%
                </Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: "10px",
                color: "#6B7280",
                marginBottom: "6px",
              }}
            >
              Category 14
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginBottom: "6px",
                fontWeight: "normal",
              }}
            >
              Finding product using identity
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
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
                <Text
                  style={{ fontSize: 12, color: "#374151", marginBottom: 4 }}
                >
                  (4/4) 100%
                </Text>
                <Text style={{ fontSize: 11, color: "#6B7280" }}>
                  Correct steps percentage
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ExamStatusReport;
