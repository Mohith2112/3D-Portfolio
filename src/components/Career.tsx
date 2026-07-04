import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Audio Deepfake Detector</h4>
                <h5>Personal Project · PyTorch</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Trained a CNN-based spoofed-speech classifier on the ASVspoof 2019 LA dataset (121,000+ samples), reaching a 23.93% Equal Error Rate, and deployed an interactive demo on Hugging Face Spaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Userspace TCP/IP Stack</h4>
                <h5>tinystack · C++20</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Built a complete TCP/IP stack in C++ running entirely in userspace via macOS utun, implementing the full RFC 793 TCP state machine with zero external libraries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DSA with C++</h4>
                <h5>LeetCode, HackerRank</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Final-year CSE-AI student focused on building strong problem-solving skills through DSA in C++, with a 5-star HackerRank rating across 30+ SQL challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
