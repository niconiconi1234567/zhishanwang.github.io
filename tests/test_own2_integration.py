from html.parser import HTMLParser
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
OWN2_URL = "https://own2-collective.onrender.com/"


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))


class Own2IntegrationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = INDEX.read_text(encoding="utf-8")
        cls.parser = PageParser()
        cls.parser.feed(cls.html)

    def test_home_exposes_live_own2_platform(self):
        launch_links = [
            attrs.get("href")
            for tag, attrs in self.parser.tags
            if tag == "a" and attrs.get("data-own2-launch") is not None
        ]
        self.assertIn(OWN2_URL, launch_links)

    def test_economics_detail_has_ordered_cognition_pipeline(self):
        stages = [
            attrs.get("data-own2-stage")
            for _, attrs in self.parser.tags
            if attrs.get("data-own2-stage")
        ]
        self.assertEqual(
            stages,
            [
                "private-cognition",
                "social-consultation",
                "knowledge-assimilation",
                "collective-estimation",
            ],
        )

    def test_own2_visual_assets_are_referenced_and_exist(self):
        expected = {
            "assets/own2-interactive-studio.webp",
            "assets/own2-cognition-pipeline.webp",
            "assets/own2-information-propagation.webp",
        }
        referenced = {
            attrs["src"]
            for tag, attrs in self.parser.tags
            if tag == "img" and attrs.get("src") in expected
        }
        self.assertEqual(referenced, expected)
        for relative_path in expected:
            self.assertTrue((ROOT / relative_path).is_file(), relative_path)

    def test_platform_scope_and_collaboration_are_explicit(self):
        economics = self.html.split(
            'data-topic-panel="economics"', 1
        )[1].split('class="zw-detail-end"', 1)[0]
        self.assertIn(OWN2_URL, economics)
        self.assertIn("not financial forecasting or investment advice", economics)
        self.assertIn("mailto:ZWANG103@e.ntu.edu.sg", economics)

    def test_own_tactic_v1_and_v2_remain_available(self):
        self.assertIn("https://own1-tactics-lab.pages.dev/", self.html)
        self.assertIn("https://own-tactic-version-2.pages.dev/", self.html)

    def test_own2_launch_is_recorded_as_a_milestone(self):
        self.assertIn("OWN2 Collective Studio", self.html)
        self.assertIn("Sep 2026", self.html)


if __name__ == "__main__":
    unittest.main()
