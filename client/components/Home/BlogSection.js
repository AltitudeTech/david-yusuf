import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Query } from "react-apollo";

import { ALL_POSTS_QUERY } from "../../lib/graphql/queries";

import Button from "../Button";
import Section from "../Section";
import Post from "../Post";
import PostsError from "../PostsError";
import PostsEmpty from "../PostsEmpty";
import LoadingPosts from "../LoadingPosts";

export default props => (
  <Section backgroundColor="#f1f1f1">
    <div className="blog-section">
      <Container>
        <div className="text-center">
          {/* <h1 className="title">My Latest Insights</h1> */}
          <h1 className="title">Insight</h1>
          <br />
          <Query query={ALL_POSTS_QUERY} variables={{ page: 1 }}>
            {({ data: { posts }, loading, error }) => {
              if (loading) return <LoadingPosts />;
              if (error) {
                console.log(error);
                return <PostsError />;
              }
              // console.log(posts);
              const { items } = posts;

              if (items.length === 0) return <PostsEmpty />;

              return (
                <Fragment>
                  <Row>
                    {items.slice(0, 3).map(post => (
                      <Col md={4} key={post._id}>
                        <Post post={post} />
                      </Col>
                    ))}
                  </Row>
                  <br />
                  <Button dark text="View More Posts " href="/blog" />
                </Fragment>
              );
            }}
          </Query>
        </div>
      </Container>
    </div>
    <style jsx>{`
      .text-center {
        margin: 0;
        width: 100%;
        text-align: center;
        padding-bottom: 20px;
      }
      .title {
        line-height: 1.15;
        font-size: 30px;
        // padding-bottom: 70px;
      }
      .blog-section {
        width: 100%;
        // min-height: 80vh;
        margin: 0;
        border: 0;
        display: flex;
        padding: 0;
        overflow: hidden;
        position: relative;
        // align-items: center;
      }
    `}</style>
  </Section>
);
