import React from 'react'
//import { Link } from 'react-router-dom'
import { Container, Row, Col, Card} from "reactstrap";
import Navbar1 from "./Navbar1";
import HeroInnerPages from './HeroInnerPages';
import Footer from './Footer';
import ProfileCEO from './ProfileCEO';

export default function Aboutus() {
    return (
        <div>
            <Navbar1 />
            <HeroInnerPages
                heading='Moto'
                textdetail=' Learn to Lead, Learn to Succeed'
            />
            <section className="section pb-0 section-components ">
                <section className="section pb-0 section-components ">
                    <Container className="mb-5">
                        <Card className="card-profile shadow mt--300 "  >
                            <Row className="m-2 mb-5 ">
                                <Col lg="12" sm="12" className="card-new-css" style={{ filter: "hue-rotate(180deg)" }}>
                                    <h2 className="text-white text-center font-weight-bold p-4" >About Us</h2>
                                </Col>
                                <Col lg="1" sm="6">  </Col>
                                <Col lg="10" sm="6" className="pt-5">
                                    <h4 className="text-justify py-3">
                                        1to1Guru, a subsidiary of AeduZEST Innovations Private Limited, is a venture by educators committed to enhancing the personalised learning experience of our students. The vision and design of 1to1Guru is to adapt proven and research based teaching-learning processes that are supported by leading academics, technocrats and mentors in India and abroad.</h4>
                                    <h4 className=" text-justify "> Our dedicated team of experienced teachers strives to prepare students for their future roles in the fields of Science, Technology, Arts, and Commerce by nurturing critical thinking skills, communication, and perseverance to achieve their fullest potential. We believe in providing our students a safe and enabling space in the form of a one-to-one interaction platform with a personal mentor. </h4>
                                    <h4 className=" text-justify">Our mentors have excellent pedagogical content knowledge and also an in-depth understanding of the students' abilities and potentials. The unique design of our platform empowers students by providing them with the confidence to critically explore ideas, express opinions and clarify doubts. Our one-to-one teaching-learning approach has a deep-rooted vision to create a self-assured student in today’s demanding world.  </h4>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </section>

                <section className="section pb-0 section-components ">
                    <Container className="mb-5">
                        <Card className="card-profile shadow mt-150 "  >
                            <Row className="m-2 mb-5 p-1 ">
                                <Col lg="12" sm="12" className="card-new-css" style={{ filter: "hue-rotate(120deg)" }}>
                                    <h2 className="text-white text-center font-weight-bold p-4" >OUR VISION</h2>
                                </Col>
                                <Col lg="1" sm="6" >  </Col>
                                <section className="card-bg1">
                                    <Col lg="10" sm="6"  >
                                        {/* Inputs */}
                                        <h4 className="text-justify py-3">
                                            1to1Guru envisions preparing and motivating our students for a rapidly changing and ever-evolving world by nurturing students' critical thinking skills, communication, and perseverance. We understand the importance of personalised learning for student's overall growth and are fully committed to students' career readiness by empowering them to meet current and future challenges.</h4>
                                        <h4 className=" text-justify "> The ratio of the number of students to teachers is often used to adjudge the quality of the teaching-learning process. Research indicates that the smaller this ratio, the better is the learning. But even in the best institutions, there are crowded classrooms in which one teacher is teaching several dozen students, sometimes even hundreds of students! How can any teacher, however good, provide personalised attention to each student in such a large class? To overcome this, with the support of state-of-art technology, we have designed an individual digital classroom for each student: One Guru One Shishya (One Mentor One student) </h4>
                                        <h4 className=" text-justify"> In our classroom, the ratio of teachers to students is 1-to-1; hence we maximise the student and mentor interaction and in a true sense there is a real personalised learning experience. Our dedicated mentors are subject matter experts who use proven teaching strategies, supported by state-of-art technology, to help the students bring out the best in them.</h4>
                                    </Col>
                                </section>
                            </Row>
                        </Card>
                    </Container>
                </section>
                <section className="section section-components " >
                    <Container className="mb-5">
                        <Card className="card-profile shadow mt-150 "  >
                            <Row className="m-2 mb-5 p-1">
                                <Col lg="12" sm="12" className="card-new-css" style={{ filter: "hue-rotate(60deg)" }}>
                                    <h2 className="text-white text-center font-weight-bold p-4" >OUR MISSION</h2>
                                </Col>
                                <Col lg="1" sm="6" >  </Col>
                                <section className="card-bg-mission">
                                    <Col lg="10" sm="6"  >
                                        {/* Inputs */}
                                        <h4 className="text-justify py-4">
                                            1to1Guru is committed to recognizing the importance of communication and encouraging a personal dialogue between students and mentors in order to promote healthy, intellectual, scholarly, social and holistic growth of our students.</h4>
                                        <h4 className=" text-justify py-4"> We aim to provide a safe and supportive learning environment for our students to explore ideas and resolve their doubts in a friendly atmosphere, developing a positive self-belief. </h4>
                                        <h4 className=" text-justify py-4"> We recruit the best teachers, educators, and mentors to provide the finest opportunities to our students to critically think, learn and venture to achieve success in their future endeavors.</h4>
                                    </Col>
                                </section>
                            </Row>
                        </Card>
                    </Container>
                </section>
                {/* <Container className="mb-5 " >
                    <Card className="card-profile shadow mt-150 card-bg2"  >
                        <Row className="m-2 mb-5 py-5 pt-lg-6">
                            <Col lg="1" sm="1"></Col>
                            <Col lg="10" sm="10">
                                <h2 className="text-success text-center font-weight-bold mb-4 ">OUR MISSION</h2>
                                <p className="lead text-justify">
                                    </p>
                                <p className="lead text-justify">  </p>
                                <p className="lead text-justify"> </p>
                            </Col>
                        </Row>
                    </Card>
                    <div className="card-new-css">Hi</div>
                </Container> */}

            </section>
            <ProfileCEO />
                <section className="section pb-0 section-components ">
                    <Container className="mb-5">
                        <Card className="card-profile shadow"  >
                            <Row className="m-2 mb-5 ">
                                <Col lg="12" sm="12" className="card-new-css" style={{ filter: "hue-rotate(320deg)" }}>
                                    <h2 className="text-white text-center font-weight-bold p-4" >Message from the CEO</h2>
                                </Col>
                                <Col lg="1" sm="6">  </Col>
                                <Col lg="10" sm="6" className="pt-5">
                                    <h4 className="text-justify py-3"> Dear Students and Parents, hello and Welcome to 1to1 Guru! </h4>
                                    <h4 className=" text-justify "> At 1to1 Guru, we understand the importance of encouraging dialogue among students and teachers in this ever-evolving online world. This has led us to design a one-of-a-kind online platform for personalized learning to promote our students' intellectual, scholarly, and social growth. In our approach, we pair one student with one mentor to give the best personal engagement for learning and self-development. </h4>
                                    <h4 className=" text-justify">We use state-of-art technology for facilitating this personalized learning experience based on the unique needs of our students. All our mentors are highly qualified, verified, and trusted so that they provide a safe, personalized learning experience. Being the only student in the class, the entire focus of the mentor is on the student. Due to one-to-one engagement, the teachers know the students' ability and potential and plan the teaching-learning sequences accordingly.</h4>
                                    <h4 className=" text-justify "> Through our platform, students learn at their own pace. We closely monitor our students' progress, and when required, the topics are repeated to make sure that no doubts or queries remain unanswered. Based on student learning analytics, our mentors and staff regularly interact and discuss with parents regarding student's progress. </h4>
                                    <h4 className=" text-justify"> At One-to-One Guru, we are fully committed to students' career readiness by empowering them to meet current and future challenges via deep personalized learning experiences.</h4>
                                    <h4 className=" text-justify pt-5 "> Best regards </h4>
                                    <h4 className=" text-justify"> Dr. M A Mujawar</h4>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </section>

            <Footer />
        </div >
    )
}
