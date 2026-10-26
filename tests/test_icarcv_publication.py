from html.parser import HTMLParser
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
PDF_PATH = "publications/Wang_Su_ICARCV_2026_Accepted_Manuscript.pdf"
PUBLICATION_ID = "icarcv-2026"


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))


class IcarcvPublicationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = INDEX.read_text(encoding="utf-8")
        cls.parser = PageParser()
        cls.parser.feed(cls.html)

    def test_accepted_paper_card_opens_a_publication_detail(self):
        publication_buttons = [
            attrs.get("data-publication")
            for tag, attrs in self.parser.tags
            if tag == "button" and attrs.get("data-publication")
        ]
        publication_panels = [
            attrs.get("data-publication-panel")
            for _, attrs in self.parser.tags
            if attrs.get("data-publication-panel")
        ]
        self.assertIn(PUBLICATION_ID, publication_buttons)
        self.assertIn(PUBLICATION_ID, publication_panels)

    def test_accepted_status_and_bibliographic_metadata_are_visible(self):
        self.assertIn("Accepted paper · ICARCV 2026", self.html)
        self.assertIn(
            "2026 19th International Conference on Control, Automation, "
            "Robotics and Vision",
            self.html,
        )
        self.assertIn("Zhishan Wang and Rong Su", self.html)

    def test_theory_story_has_five_ordered_steps(self):
        steps = [
            attrs.get("data-theory-step")
            for _, attrs in self.parser.tags
            if attrs.get("data-theory-step")
        ]
        self.assertEqual(
            steps,
            [
                "reference",
                "decomposition",
                "objective",
                "distributed-control",
                "convergence",
            ],
        )

    def test_current_pdf_is_available_as_submitted_accepted_manuscript(self):
        pdf_links = [
            attrs.get("href")
            for tag, attrs in self.parser.tags
            if tag == "a" and attrs.get("data-publication-pdf") == PUBLICATION_ID
        ]
        self.assertIn(PDF_PATH, pdf_links)
        self.assertTrue((ROOT / PDF_PATH).is_file())
        self.assertIn("submitted version", self.html)
        self.assertIn("not the final IEEE-formatted version", self.html)

    def test_selected_publication_visuals_are_referenced_and_exist(self):
        expected = {
            "assets/icarcv-2026-cover.webp",
            "assets/icarcv-2026-graphs.webp",
            "assets/icarcv-2026-framework.webp",
            "assets/icarcv-2026-validation.webp",
        }
        referenced = {
            attrs["src"]
            for tag, attrs in self.parser.tags
            if tag == "img" and attrs.get("src") in expected
        }
        self.assertEqual(referenced, expected)
        for relative_path in expected:
            self.assertTrue((ROOT / relative_path).is_file(), relative_path)

    def test_research_topics_link_to_the_accepted_result(self):
        topic_links = {
            attrs.get("data-publication-context")
            for _, attrs in self.parser.tags
            if attrs.get("data-publication-context")
        }
        self.assertEqual(topic_links, {"autonomy", "swarm", "independent", "football"})

    def test_collaboration_and_future_work_are_part_of_the_detail(self):
        marker = f'data-publication-panel="{PUBLICATION_ID}"'
        self.assertIn(marker, self.html)
        detail = self.html.partition(marker)[2].partition('id="zw-page-cv"')[0]
        self.assertIn("Future work", detail)
        self.assertIn("mailto:ZWANG103@e.ntu.edu.sg", detail)


if __name__ == "__main__":
    unittest.main()
