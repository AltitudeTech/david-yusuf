import { Component } from 'react'
import { Container, Row, Col } from "reactstrap"
import { Query } from 'react-apollo'
import Pagination from "react-js-pagination"

import { ALL_POSTS_QUERY } from '../../lib/graphql/queries'

// import Button from '../Button'
import Section from '../Section'
import Post from '../Post'
import LoadingPosts from "../LoadingPosts";
import PostsError from "../PostsError";
import PostsEmpty from "../PostsEmpty";

export default class extends Component {
  state = {
    currentPage: 1,
    perPage: 5
  }

  handlePageChange = (pageNumber) => {
    this.setState({currentPage: pageNumber});
  }

  render(){
    return <Section
      backgroundColor='#f1f1f1'
      >
        <div className="blog-section">
          <Container>
            <Query
              query={ALL_POSTS_QUERY}
              variables={{ page: this.state.currentPage }}
              >{
              ({data: { posts }, loading, error}) => {
                if (loading) return <LoadingPosts />
                if (error) {
                  console.log(error);
                  return <PostsError showHome/>
                }

                const { items } = posts;

                if (items.length === 0) return <PostsEmpty />;

                return (items.length > 0 ? <div className="text-center">
                  <Row>
                    {items.map(post=>(
                      <Col md={4} key={post._id}>
                        <Post post={post} detailed/>
                      </Col>
                    ))}
                  </Row>
                  <div className="float-center" style={{textAlign: 'center', width: 'fit-content', margin: 'auto'}}>
                    <Pagination
                      activePage={this.state.currentPage}
                      itemsCountPerPage={posts.pageInfo.perPage}
                      totalItemsCount={posts.pageInfo.itemCount}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange}
                     />
                   </div>
                </div> : null)
              }
            }</Query>
          </Container>
        </div>
        <style jsx>{`
          .text-center {
            margin: 0;
            width: 100%;
            text-align: center;
          }
          .title {
            line-height: 1.15;
            font-size: 30px;
          }
          .blog-section {
            width: 100%;
            margin: 0;
            border: 0;
            display: flex;
            padding: 0;
            overflow: hidden;
            position: relative;
          }
          :global(.pagination li a){
            color: #DAA520 !important;
            padding: 0px 7px;
          }
          :global(.pagination li.active){
            background-color: black;
          }
          :global(.pagination li:hover){
            background-color: gray;
          }
          :global(.paginate a){
            transition: background-color .5s;
          }
          `}</style>
        </Section>
  }
}
