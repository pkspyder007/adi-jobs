import Head from "next/head";
import Jobcard from "../components/Jobcard";
import data from "../jobs.json";

export default function Home({JOBS_DATA}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Find | Jobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <section className="text-blueGray-700 ">
          <div className="container flex flex-col items-center px-5 py-4 mx-auto">
            <div className="flex flex-col w-full mb-4 text-center">
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                One place for all authentic job openings
              </h2>
              <h1 className="mx-auto mb-4 text-3xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 title-font">
                {" "}
                All jobs/openings are authentic and verified, to find the original source click the job link.{" "}
              </h1>
              {/* <a
                className="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-black"
                title="read more"
              >
                {" "}
                Read more about the offer »{" "}
              </a> */}
            </div>
          </div>
        </section>
      </header>

      <main className="sm:px-6 md:px-20 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {JOBS_DATA.reverse().map((job) => (
          <Jobcard key={job.id} {...job} />
        ))}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://praveeen.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Praveen
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      JOBS_DATA: data
    }
  }
}