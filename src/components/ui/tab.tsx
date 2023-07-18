import { useState } from 'react';

const Tabs = ({
  details,
}: {
  details: {
    description: string;
    how_to_use: string;
    product_features: string;
    benefit: string;
  };
}) => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  if (details == undefined) {
    return <></>;
  }

  const renderTabContent = (tabId: string) => {
    switch (tabId) {
      case 'description':
        return (
          <div
            className={`tab-pane fade ${
              activeTab === 'home' ? 'show active' : ''
            } post-content`}
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <p dangerouslySetInnerHTML={{ __html: details.description }} />
          </div>
        );
      case 'product_features':
        return (
          <div
            className={`tab-pane fade ${
              activeTab === 'product_features' ? 'show active' : ''
            }  post-content`}
            id="product_features"
            role="tabpanel"
            aria-labelledby="product_features-tab"
          >
            <p
              dangerouslySetInnerHTML={{ __html: details.product_features }}
            ></p>
          </div>
        );
      case 'benefit':
        return (
          <div
            className={`tab-pane fade ${
              activeTab === 'benefit' ? 'show active' : ''
            }  post-content`}
            id="benefit"
            role="tabpanel"
            aria-labelledby="benefit-tab"
          >
            <p dangerouslySetInnerHTML={{ __html: details.benefit }} />
          </div>
        );
      case 'how_to_use':
        return (
          <div
            className={`tab-pane fade ${
              activeTab === 'benefit' ? 'show active' : ''
            }`}
            id="benefit"
            role="tabpanel"
            aria-labelledby="benefit-tab"
          >
            <p dangerouslySetInnerHTML={{ __html: details.how_to_use }} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="my-4 rounded-xl border">
      <ul
        className="nav nav-tabs flex list-none rounded-tr-xl rounded-tl-xl   border-t bg-[#EAEAEA]     "
        id="myTab"
        role="tablist"
      >
        <li className="nav-item rounded-tl-xl " role="presentation">
          <button
            className={`nav-link ${
              activeTab === 'description'
                ? 'active   bg-white '
                : 'bg-[#EAEAEA]'
            }  rounded-tl-xl  border-r  border-gray-400 py-2 px-8`}
            id="description-tab"
            data-bs-toggle="tab"
            data-bs-target="#description"
            type="button"
            role="tab"
            aria-controls="description"
            aria-selected={activeTab === 'description'}
            onClick={() => handleTabClick('description')}
          >
            Description:-
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === 'product_features'
                ? 'active bg-white'
                : ' bg-[#EAEAEA]'
            } border-r  border-gray-400 py-2 px-8`}
            id="product_features-tab"
            data-bs-toggle="tab"
            data-bs-target="#product_features"
            type="button"
            role="tab"
            aria-controls="product_features"
            aria-selected={activeTab === 'product_features'}
            onClick={() => handleTabClick('product_features')}
          >
            Product Features:-
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === 'benefit' ? 'active bg-white' : 'bg-[#EAEAEA]'
            } border-r border-gray-400 py-2 px-8`}
            id="benefit-tab"
            data-bs-toggle="tab"
            data-bs-target="#benefit"
            type="button"
            role="tab"
            aria-controls="benefit"
            aria-selected={activeTab === 'benefit'}
            onClick={() => handleTabClick('benefit')}
          >
            Benefit:-
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === 'how_to_use' ? 'active bg-white' : 'bg-[#EAEAEA]'
            } border-r border-gray-400 py-2 px-8`}
            id="how_to_use-tab"
            data-bs-toggle="tab"
            data-bs-target="#how_to_use"
            type="button"
            role="tab"
            aria-controls="how_to_use"
            aria-selected={activeTab === 'how_to_use'}
            onClick={() => handleTabClick('how_to_use')}
          >
            How to Use:-
          </button>
        </li>
      </ul>

      <div className="tab-content     px-8 py-12" id="myTabContent">
        {renderTabContent(activeTab)}
      </div>
    </div>
  );
};

export default Tabs;
