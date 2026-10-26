from html.parser import HTMLParser
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
V1_URL = "https://own1-tactics-lab.pages.dev/"
V2_URL = "https://own-tactic-version-2.pages.dev/"


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))


class OwnTacticV2PageTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = INDEX.read_text(encoding="utf-8")
        cls.parser = PageParser()
        cls.parser.feed(cls.html)

    def test_home_exposes_both_live_versions(self):
        version_links = {
            attrs.get("data-own-version"): attrs.get("href")
            for tag, attrs in self.parser.tags
            if tag == "a" and attrs.get("data-own-version")
        }
        self.assertEqual(version_links.get("1"), V1_URL)
        self.assertEqual(version_links.get("2"), V2_URL)

    def test_research_evolution_has_three_ordered_stages(self):
        stages = [
            attrs.get("data-own-stage")
            for _, attrs in self.parser.tags
            if attrs.get("data-own-stage")
        ]
        self.assertEqual(stages, ["v1", "v1-1", "v2"])

    def test_version_two_visual_assets_are_referenced_and_exist(self):
        expected = {
            "assets/own-v2-tactical-network.webp",
            "assets/own-v2-evolution.webp",
            "assets/own-v2-controller.webp",
            "assets/own-v2-network-behavior.webp",
        }
        referenced = {
            attrs["src"]
            for tag, attrs in self.parser.tags
            if tag == "img" and attrs.get("src") in expected
        }
        self.assertEqual(referenced, expected)
        for relative_path in expected:
            self.assertTrue((ROOT / relative_path).is_file(), relative_path)

    def test_personal_section_invites_discussion_and_collaboration(self):
        personal = self.html.split('id="zw-page-personal"', 1)[1].split(
            'id="zw-page-archive"', 1
        )[0]
        self.assertIn(V1_URL, personal)
        self.assertIn(V2_URL, personal)
        self.assertIn("discussion or collaboration", personal)
        self.assertIn("mailto:ZWANG103@e.ntu.edu.sg", personal)

    def test_version_two_release_is_recorded_as_a_milestone(self):
        self.assertIn("Sep 2026", self.html)
        self.assertIn("OWN Tactic Version 2", self.html)


if __name__ == "__main__":
    unittest.main()
