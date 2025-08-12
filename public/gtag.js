// Google Analytics 4 Configuration
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

// Replace with your actual GA4 measurement ID
gtag("config", "G-BFFB6VGR5F", {
  page_title: "Analyce Ferreira Portfolio",
  page_location: window.location.href,
  custom_map: {
    custom_parameter_1: "portfolio_section",
    custom_parameter_2: "project_viewed",
  },
});

// Enhanced Ecommerce tracking
gtag("event", "page_view", {
  page_title: document.title,
  page_location: window.location.href,
  page_referrer: document.referrer,
});

// Track portfolio project views
function trackProjectView(projectName) {
  gtag("event", "view_item", {
    item_id: projectName,
    item_name: projectName,
    item_category: "Portfolio Project",
    item_list_name: "Portfolio",
  });
}

// Track contact form submissions
function trackContactForm() {
  gtag("event", "form_submit", {
    form_name: "Contact Form",
    form_id: "contact_form",
  });
}

// Track scroll depth
let maxScroll = 0;
window.addEventListener("scroll", () => {
  const scrollPercent = Math.round(
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  );
  if (scrollPercent > maxScroll) {
    maxScroll = scrollPercent;
    if (maxScroll % 25 === 0) {
      // Track every 25%
      gtag("event", "scroll", {
        scroll_depth: maxScroll,
      });
    }
  }
});

// Track time on page
let startTime = Date.now();
window.addEventListener("beforeunload", () => {
  const timeOnPage = Math.round((Date.now() - startTime) / 1000);
  gtag("event", "timing_complete", {
    name: "page_view_time",
    value: timeOnPage,
  });
});

// Track outbound links
document.addEventListener("click", (e) => {
  if (
    e.target.tagName === "A" &&
    e.target.hostname !== window.location.hostname
  ) {
    gtag("event", "click", {
      link_url: e.target.href,
      link_text: e.target.textContent,
      outbound: true,
    });
  }
});

// Track portfolio interactions
document.addEventListener("DOMContentLoaded", () => {
  // Track portfolio item clicks
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach((item) => {
    item.addEventListener("click", () => {
      const projectName =
        item.querySelector("h3")?.textContent || "Unknown Project";
      trackProjectView(projectName);
    });
  });

  // Track contact form submissions
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", trackContactForm);
  }
});

// Performance monitoring
if ("performance" in window) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType("navigation")[0];
      if (perfData) {
        gtag("event", "timing_complete", {
          name: "load",
          value: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
        });

        gtag("event", "timing_complete", {
          name: "dom_content_loaded",
          value: Math.round(
            perfData.domContentLoadedEventEnd -
              perfData.domContentLoadedEventStart
          ),
        });
      }
    }, 0);
  });
}
