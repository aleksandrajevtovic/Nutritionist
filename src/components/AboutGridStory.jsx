import React from "react";

const AboutGridStory = () => {
  return (
    <div>
        <div className="about-grid-story">
      <section className="text-media text-media--no-bg ">
        <div className="text-media__col text-media__col--media">
          <div className="text-media__img-wrapper">
            <img
              className="text-media__img"
              src="/assets/images/beginning.jpg"
              alt="Silhouette of size people waving on a hill at sunset"
            />
          </div>
        </div>
        <div className="text-media__col text-media__col--text">
          <div className="text-media__content">
            <h2>How it all began...</h2>
            <p>
              At the age of 16 I realized that the love of nutrition is stronger
              than anything. As a serious science such as nutrition, I did not
              want to deal superficially, in addition to the primary faculty, I
              started education in that field. On the way, I was lucky to meet
              the mentors who instilled in me the most important skill, which is
              to distinguish science and reference sources from the
              pseudoscience we are surrounded by today, which deals with various
              theories and restrictive diets, which leaves people frustrated,
              with an even worse relationship. towards food and yourself.
            </p>
          </div>
        </div>
      </section>

      {/* <!--Without background color and with narrower image--> */}
      <section className="text-media text-media--no-bg text-media--narrow">
        <div className="text-media__col text-media__col--media">
          <div className="text-media__img-wrapper">
            <img
              src="/assets/images/love.jpg"
              alt="Woman with laptop computer smiling at the camera"
            />
          </div>
        </div>
        <div className="text-media__col text-media__col--text">
          <div className="text-media__content">
            <h2>Learning to love...</h2>
            <p>
              At the age of 22, I enrolled in the FISAF International Academy,
              which provided me with an international license and the title of
              Certified Personal Trainer. In 2017, I also completed the
              international education Precision Nutrition, after which I
              received the title of Sports and Exercise Nutritionist. In 2019,
              while studying and taking the state exam in Austria, I became a
              licensed nutritionist.
            </p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default AboutGridStory;
