import { WithRouterProps } from 'next/dist/client/with-router';
import Link from 'next/link';
import { withRouter, NextRouter } from 'next/router';

interface withRouterProps {
  router: NextRouter;
}

const Tabs = ({ router }: WithRouterProps) => {
  const {
    query: { tab },
  } = router;

  // split Links into "Tab" components, pass durations?
  const isTabOne = tab === '1' || tab === null;
  const isTabTwo = tab === '2';

  return (
    <>
      <div className="mb-3 flex gap-3">
        <Link
          selected={isTabOne}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          href={{ pathname: '/', query: { tab: '1' } }}
        >
          Tab 1
        </Link>

        <Link
          selected={isTabTwo}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          href={{ pathname: '/', query: { tab: '2' } }}
        >
          Tab 2
        </Link>

        {/* <Link
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          href={{ pathname: '/', query: { tab: '3' } }}
        >
          Tab 3
        </Link> */}
      </div>

      <div>
        {isTabOne && <>This is tab one content</>}
        {isTabTwo && <>This is tab two content</>}
      </div>
    </>
  );
};

export default withRouter(Tabs);
